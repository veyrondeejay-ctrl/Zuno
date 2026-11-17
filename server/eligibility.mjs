// Stage 2 integration boundary. This file is not exposed by the static preview.
// The live Clerky connection must populate these records from trusted server-side
// configuration and account evidence. Client input must never set these flags.
export const zunoPolicy=Object.freeze({liveAIEnabled:false,allowPaid:false,maxAttempts:2,maxInputCharacters:600,maxOutputTokens:450,defaultChildDailyLimit:5});
export const candidateModels=Object.freeze([
 {provider:'groq',id:'openai/gpt-oss-20b',state:'hold',reason:'June 2026 terms address customer applications used by minors under customer responsibility. Account free quota, ZDR, parental authorization and safety evaluation remain unverified.'},
 {provider:'groq',id:'openai/gpt-oss-120b',state:'hold',reason:'Same provider gates; reserve for difficult grounded explanations, not every request.'},
 {provider:'cloudflare',id:'@cf/meta/llama-3.2-3b-instruct',state:'excluded',reason:'Published retirement on 2026-11-20; do not add a new dependency.'},
 {provider:'gemini',id:'*',state:'excluded',reason:'Gemini API terms prohibit clients directed towards or likely accessed by under-18s.'},
 {provider:'mistral',id:'mistral-small-latest',state:'hold',reason:'Free-mode training/privacy and production terms must be resolved.'},
 {provider:'openrouter',id:'account-verified-zero-price-only',state:'hold',reason:'Require an exact model and endpoint allowlist, upstream terms, no-training and zero-retention evidence.'}
]);
export function eligibleRoutes(records,{now=Date.now(),ageBand,remainingChildRequests=0,remainingGlobalRequests=0}={}){
 if(!['6-8','9-11','12-14'].includes(ageBand)||!Number.isFinite(remainingChildRequests)||remainingChildRequests<=0||!Number.isFinite(remainingGlobalRequests)||remainingGlobalRequests<=0)return [];
 return records.filter(r=>{
  if(!r||typeof r.id!=='string'||!r.id.trim()||typeof r.provider!=='string')return false;
  if(['gemini','google-ai-studio'].includes(r.provider.toLowerCase()))return false;
  if(r.enabled!==true||r.accountFreeVerified!==true||r.childUseVerified!==true||r.commercialUseVerified!==true||r.safetyPassed!==true||r.noTraining!==true||r.zeroRetention!==true)return false;
  if(!Array.isArray(r.allowedAgeBands)||!r.allowedAgeBands.includes(ageBand))return false;
  if(r.promptPrice!==0||r.completionPrice!==0||r.otherCharges!==0)return false;
  if(!Number.isFinite(r.quotaRemaining)||r.quotaRemaining<=0)return false;
  if(!Number.isFinite(r.verifiedUntil)||r.verifiedUntil<=now)return false;
  if(r.retiresAt!=null&&(!Number.isFinite(r.retiresAt)||r.retiresAt<=now+30*86400000))return false;
  if(!Array.isArray(r.evidence)||r.evidence.length===0)return false;
  if(r.provider==='openrouter'&&!r.id.endsWith(':free'))return false;
  return true;
 });
}
export function validateAskBody(body){
 if(!body||typeof body!=='object'||Array.isArray(body))throw Error('Invalid question.');
 const keys=Object.keys(body);if(keys.some(k=>!['question','topicId','requestId'].includes(k)))throw Error('Unexpected request fields.');
 if(typeof body.question!=='string'||!body.question.trim()||body.question.length>zunoPolicy.maxInputCharacters)throw Error('Question length is invalid.');
 if(body.topicId!==undefined&&(typeof body.topicId!=='string'||!/^[a-z0-9-]{1,80}$/.test(body.topicId)))throw Error('Invalid topic.');
 if(typeof body.requestId!=='string'||!/^[a-zA-Z0-9-]{8,80}$/.test(body.requestId))throw Error('A valid request ID is required.');
 return {question:body.question.trim(),topicId:body.topicId??null,requestId:body.requestId};
}
