const encoder=new TextEncoder();
const COOKIE='clerky_session';
function bytesToHex(value){return Array.from(new Uint8Array(value),x=>x.toString(16).padStart(2,'0')).join('')}
function hexToBytes(value){if(!/^[a-f0-9]+$/i.test(value)||value.length%2)throw Error('Invalid encoding');return new Uint8Array(value.match(/../g).map(x=>parseInt(x,16)))}
function encode(value){return btoa(String.fromCharCode(...encoder.encode(value))).replaceAll('+','-').replaceAll('/','_').replace(/=+$/,'')}
function decode(value){return new TextDecoder().decode(Uint8Array.from(atob(value.replaceAll('-','+').replaceAll('_','/')),c=>c.charCodeAt(0)))}
async function sign(value,secret){const key=await crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);return bytesToHex(await crypto.subtle.sign('HMAC',key,encoder.encode(value)))}
function constantTime(a,b){if(a.length!==b.length)return false;let different=0;for(let i=0;i<a.length;i++)different|=a.charCodeAt(i)^b.charCodeAt(i);return different===0}
export async function hashPassword(password,salt,iterations=100000,pepper=''){const input=pepper?await sign(password,pepper):password;const key=await crypto.subtle.importKey('raw',encoder.encode(input),'PBKDF2',false,['deriveBits']);return bytesToHex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:hexToBytes(salt),iterations,hash:'SHA-256'},key,256))}
export async function verifySession(request,env,now=Date.now()){
 const raw=request.headers.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(COOKIE+'='))?.slice(COOKIE.length+1);
 if(!raw||!env.CLERKY_SESSION_SECRET||!env.CLERKY_LOGIN_EMAIL)return null;
 try{const [payload,signature,...rest]=raw.split('.');if(rest.length||!constantTime(await sign(payload,env.CLERKY_SESSION_SECRET),signature))return null;const data=JSON.parse(decode(payload));if(data.expires<=now||data.email!==env.CLERKY_LOGIN_EMAIL.toLowerCase()||data.issued>now+60000)return null;return {email:data.email,method:'password'};}catch{return null}
}
const attempts=new Map();
export function rateLimited(request,now=Date.now()){
 const id=request.headers.get('cf-connecting-ip')||'unknown',entry=attempts.get(id);if(entry&&entry.until>now&&entry.count>=5)return true;if(!entry||entry.until<=now)attempts.set(id,{count:0,until:now+900000});attempts.get(id).count++;if(attempts.size>1000)for(const [k,v]of attempts)if(v.until<now)attempts.delete(k);return false;
}
async function loginLimited(request,env,now){
 if(!env.DB)return rateLimited(request,now);
 const bucket=Math.floor(now/900000),ip=request.headers.get('cf-connecting-ip')||'unknown';
 const ipKey=await sign(ip,env.CLERKY_SESSION_SECRET||'local');
 const results=await env.DB.batch([
  env.DB.prepare('INSERT INTO auth_attempts (id, bucket, count) VALUES (?, ?, 1) ON CONFLICT(id) DO UPDATE SET count = CASE WHEN bucket = excluded.bucket THEN count + 1 ELSE 1 END, bucket = excluded.bucket RETURNING count').bind('ip:'+ipKey,bucket),
  env.DB.prepare('INSERT INTO auth_attempts (id, bucket, count) VALUES (?, ?, 1) ON CONFLICT(id) DO UPDATE SET count = CASE WHEN bucket = excluded.bucket THEN count + 1 ELSE 1 END, bucket = excluded.bucket RETURNING count').bind('account',bucket)
 ]);
 return results[0].results[0].count>5||results[1].results[0].count>15;
}
export async function login(request,env,{now=Date.now(),throttle=true}={}){
 if(request.method!=='POST')return Response.json({error:'Method not allowed.'},{status:405});
 if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Request origin rejected.'},{status:403});
 if(throttle&&!env.DB)return Response.json({error:'Private sign-in storage is not ready. Please try again shortly.'},{status:503});
 if(throttle&&await loginLimited(request,env,now))return Response.json({error:'Too many attempts. Please wait before trying again.'},{status:429,headers:{'Retry-After':'900'}});
 if(!env.CLERKY_PASSWORD_HASH||!env.CLERKY_PASSWORD_SALT||!env.CLERKY_SESSION_SECRET||!env.CLERKY_LOGIN_EMAIL)return Response.json({error:'Sign-in is not configured yet.'},{status:503});
 let data;try{const text=await request.text();if(text.length>3000)throw Error();data=JSON.parse(text)}catch{return Response.json({error:'Invalid sign-in request.'},{status:400})}
 if(!data||typeof data.email!=='string'||typeof data.password!=='string'||data.password.length>128)return Response.json({error:'Email or password is incorrect.'},{status:401});
 const derived=await hashPassword(data.password,env.CLERKY_PASSWORD_SALT,Number(env.CLERKY_PASSWORD_ITERATIONS)||100000,env.CLERKY_PASSWORD_PEPPER);
 if(data.email.trim().toLowerCase()!==env.CLERKY_LOGIN_EMAIL.toLowerCase()||!constantTime(derived,env.CLERKY_PASSWORD_HASH))return Response.json({error:'Email or password is incorrect.'},{status:401,headers:{'Cache-Control':'no-store'}});
 const token=encode(JSON.stringify({email:env.CLERKY_LOGIN_EMAIL.toLowerCase(),issued:now,expires:now+12*3600000,nonce:crypto.randomUUID()}));
 const signed=token+'.'+await sign(token,env.CLERKY_SESSION_SECRET);
 return Response.json({ok:true,email:env.CLERKY_LOGIN_EMAIL},{headers:{'Cache-Control':'no-store','Set-Cookie':`${COOKIE}=${signed}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=43200`}});
}
export function logout(request){if(request.method!=='POST'||request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Request origin rejected.'},{status:403});return Response.json({ok:true},{headers:{'Cache-Control':'no-store','Set-Cookie':`${COOKIE}=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0`}})}
