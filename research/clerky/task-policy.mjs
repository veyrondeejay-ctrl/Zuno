import {redactSecrets} from '../shared/redact.mjs';
// Inspect the whole user thread: follow-ups inherit the actual deliverable, not just the tab label.
export function taskProfile(messages,selected='chat'){
 const allUsers=messages.filter(m=>m.role==='user').map(m=>m.content);let start=0;for(let i=0;i<allUsers.length;i++)if(/\b(?:create|build|draft|write|design|develop|analyse|analyze|compare|calculate|explain|what|how|tell)\b/i.test(allUsers[i])&&!/\b(?:it|this|that|same|original|previous|again|continue|made|done|earlier|last)\b/i.test(allUsers[i]))start=i;const users=allUsers.slice(start),latest=users.at(-1)||'',thread=users.join('\n'),recent=users.join('\n').slice(-24000);
 const email=/\b(?:e-?mail(?:er)?|newsletter)\b/i.test(thread)&&/html|template|design|welcome|layout/i.test(thread);
 let task=selected==='code'?'code':selected==='create'||selected==='motion'||selected==='voice'?'creative':selected==='write'?'write':'chat';
 const current=latest.length>35?latest:recent;
 if(email||/\b(?:html|css|javascript|typescript|python|react|sql|api|debug|code|website|webpage|dashboard|frontend|backend)\b/i.test(current))task='code';
 else if(/\b(?:analyse|analyze|compare|calculate|reason|research|strategy|assess|review)\b/i.test(current))task='analysis';
 else if(/\b(?:script|storyboard|shot list|cinematic|campaign|treatment|image prompts?|video prompts?|prompts?[^\n]{0,50}(?:image|video)|higgsfield|seedance|kling|text.to.video|image.to.video)\b/i.test(current)||/\b(?:create|generate|make)\s+(?:an?\s+)?(?:image|video|portrait|photograph)\b/i.test(current))task='creative';
 else if(/\b(?:email|proposal|letter|write|rewrite|copy|article|draft|caption)\b/i.test(current))task='write';
 const retrieval=/^(?:please\s+)?(?:share|show|give|send|download|copy|export)\b/i.test(latest)&&/\b(?:html|code|template|email|file|version)\b/i.test(latest)&&!/\b(?:new|change|revise|update|improve|add|remove|different|redesign)\b/i.test(latest);
 const complex=email||task==='code'&&/build|create|design|develop|implement|fix|debug|high.end|premium|perfect/i.test(thread)||task==='creative'&&/campaign|treatment|storyboard/i.test(recent)||/detailed|comprehensive|proposal|strategy|analysis/i.test(latest);
 return {task,email,retrieval,complex:!!complex,label:email?'HTML email':task==='code'?'Coding & interface work':task==='creative'?'Creative direction':task==='analysis'?'Analysis & review':task==='write'?'Writing':'Conversation',brief:users.slice(0,1).concat(users.slice(Math.max(1,users.length-5))).join('\n\n').slice(0,18000)};
}
export function existingArtifact(messages,profile){
 if(!profile.retrieval)return null;
 for(let i=messages.length-2;i>=0;i--){const m=messages[i];if(m.role!=='assistant')continue;const blocks=[...m.content.matchAll(/```([^\n]*)\n([\s\S]*?)```/g)];const sourceBrief=messages.slice(0,i).filter(m=>m.role==='user').at(-1)?.content||'';const block=profile.email?blocks.find(b=>/html/i.test(b[1])&&(/<table\b/i.test(b[2])||/e-?mail|newsletter/i.test(sourceBrief))):blocks.find(b=>/html/i.test(b[1]));if(block)return {content:'Here’s the saved HTML from this conversation.\n\n'+block[0],sourceMessage:i+1,language:'html'};}
 return null;
}
export function briefContext(profile,messages){
 const prior=messages.slice(0,-1).filter(m=>m.role==='assistant').at(-1)?.content;
 return 'TASK CONTRACT\nTask: '+profile.label+'\nTreat the following user brief and corrections as the active requirements. A short follow-up does not replace the original brief. Preserve names, brand, assets, URLs and requested format. Never say nothing was previously shared if it is present in this conversation. If asked to reshare an artifact, preserve it; do not substitute a generic template. If it does not exist, say so and continue from the actual brief.\nUser requirements:\n'+redactSecrets(profile.brief)+(prior?'\nPrevious response is available in the message history; revise or reuse it when requested.':'')+'\nReturn the work first. Keep commentary short. Do not append boilerplate Acceptance Checks / Known Limitations / Next Steps unless they add task-specific evidence. Never invent completed tests. Describe only actionable unresolved issues.'+(profile.email?'\nEMAIL QUALITY RULES\nCreate the specific branded email requested, not a generic Welcome/Your Company template. Use the known approved brand asset if supplied. Use presentation tables, a fluid width:100% container with max-width around 600px, inline CSS with explicit px font units, safe fallback fonts, an actual hidden body preheader, image alt text, absolute HTTPS links and a usable mobile layout. Do not claim all clients render identically or that media queries are universally ignored. Do not use meta description as a preheader. Avoid invented discounts, free-coin counts or legal company details. Use clear editor placeholders only for genuinely missing recipient data. Never include instructional filler such as Your Headline, Replace this text, or This is your preheader. Use only hosts from the brief or verified assets. Do not invent /action, /unsubscribe, privacy links or a company address. Omit unknown links and explain any missing sending-platform unsubscribe token outside the HTML. For a welcome email, write an actual welcome message and a specific CTA.':'' );
}
// Capability profiles are maintained policy, not claimed live benchmark scores.
const profiles=[
 [/gpt-oss-120b/i,{code:94,analysis:95,creative:87,write:90,chat:88},'large general-purpose reasoning model'],
 [/codestral|qwen.*coder|deepseek.*coder|devstral/i,{code:97,analysis:75,creative:57,write:60,chat:65},'coding-specialist model'],
 [/deepseek.*(?:r1|v3)|qwen.*(?:235b|397b)|glm.*(?:4\.[5-9]|5)|kimi.*(?:k2|k3)/i,{code:93,analysis:95,creative:92,write:93,chat:90},'large reasoning and generation model'],
 [/gemini.*flash/i,{code:89,analysis:88,creative:93,write:92,chat:89},'general-purpose model suited to creative and language tasks'],
 [/gemma.*(?:27b|31b)|mistral.*small/i,{code:76,analysis:79,creative:88,write:89,chat:86},'language-focused general-purpose model'],
 [/gpt-oss-20b/i,{code:80,analysis:85,creative:77,write:81,chat:83},'compact reasoning model'],
 [/qwen|deepseek|glm|kimi/i,{code:88,analysis:88,creative:83,write:85,chat:84},'general-purpose coding and reasoning family'],
 [/nemotron.*(?:ultra|super)|nemotron.*(?:120b|253b)/i,{code:85,analysis:90,creative:77,write:80,chat:84},'reasoning-oriented model'],
 [/nemotron|lightning/i,{code:67,analysis:70,creative:65,write:68,chat:75},'fast general-purpose model'],
 [/llama.*3b/i,{code:35,analysis:35,creative:43,write:45,chat:50},'small model for simpler work'],
 [/llama.*8b/i,{code:48,analysis:49,creative:58,write:58,chat:61},'small general-purpose model'],
 [/coder|code/i,{code:83,analysis:60,creative:40,write:40,chat:50},'coding-labelled model']
];
export function rankCandidates(models,task,{requiredTokens=0,health=new Map(),now=Date.now(),complex=false}={}){
 const floor=complex?{code:76,analysis:78,creative:78,write:78,chat:65}[task]||78:0;
 return models.filter(m=>(m.provider==='openrouter'||m.freeTierVerified===true)&&(!m.context_length||m.context_length>=requiredTokens)&&!(health.get(m.id)?.retryAt>now)&&!(health.get('provider:'+m.provider)?.retryAt>now)).map(m=>{const match=profiles.find(([p])=>p.test(m.id+' '+m.name)),fit=match?match[1][task]??match[1].analysis:45,observed=health.get(m.id),penalty=Math.min(15,(observed?.failures||0)*3);return {...m,score:fit-penalty,fit,reason:(match?match[2]:'unprofiled fallback model')+' · '+task+' fit · verified free'+(penalty?' · recent failures lower its priority':''),policy:'capability-profile-v2'};}).filter(m=>m.fit>=floor).sort((a,b)=>b.score-a.score||(b.context_length||0)-(a.context_length||0)||a.id.localeCompare(b.id));
}
export function parseTaskPlan(content,profile){try{const data=JSON.parse(content.replace(/^```(?:json)?\s*|\s*```$/g,''));if(!Array.isArray(data.plan)||!data.plan.length||data.plan.length>6||data.plan.some(p=>typeof p!=='string'||p.length>1000))return null;const task=profile.email?'code':['code','analysis','write','creative','chat'].includes(data.task)?data.task:profile.task;return {task,text:data.plan.map((p,i)=>(i+1)+'. '+p).join('\n')+(Array.isArray(data.acceptance)?'\n\nChecks to make:\n'+data.acceptance.filter(p=>typeof p==='string').slice(0,5).map(p=>'- '+p.slice(0,500)).join('\n'):'')};}catch{return null}}

