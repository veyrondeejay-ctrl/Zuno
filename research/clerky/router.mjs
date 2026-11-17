import {redactSecrets} from '../shared/redact.mjs';
export function freeModels(models) {
  return models.filter(m => m.id?.endsWith(':free') && !/content-safety|safeguard|prompt-guard|span-01/i.test(m.id) && m.pricing?.prompt != null && m.pricing?.completion != null && String(m.pricing.prompt).trim() !== '' && String(m.pricing.completion).trim() !== '' && Object.values(m.pricing).every(v => v != null && String(v).trim() !== '' && Number(v) === 0) && (m.architecture?.output_modalities || ['text']).includes('text'));
}
export function rankFreeModels(models, task='chat') {
 const score=m=>{
  const id=m.id.toLowerCase();let s=0;
  if(task==='code') {if(/code|coder/.test(id))s+=100;if(/qwen|deepseek|glm|gpt-oss/.test(id))s+=60;if(/ultra/.test(id))s+=40;}
  else if(task==='chat'){if(/lightning/.test(id))s+=100;if(/gemma.*31b/.test(id))s+=70;if(/nemotron/.test(id))s+=50;}
  else {if(/ultra|inkling$/.test(id.replace(':free','')))s+=80;if(/gemma.*31b/.test(id))s+=70;if(/kimi|gpt-oss|deepseek|glm/.test(id))s+=60;}
  return s+Math.min(m.context_length||0,1000000)/1000000;
 };
 return freeModels(models).toSorted((a,b)=>score(b)-score(a));
}
export function selectFreeModel(models, requested, task='chat') {
  const eligible = rankFreeModels(models,task);
  if (requested && requested !== 'auto') {
    const model = eligible.find(m => m.id === requested);
    if (!model) throw new Error('This model is not account-eligible and verified free. Paid inference is disabled.');
    return model;
  }
  if (!eligible[0]) throw new Error('Your connection has no eligible free models under its account policies. Open Connection settings to review the key. Your message is saved.');
  return eligible[0];
}
export function validateMessages(messages) {
  if (!Array.isArray(messages) || !messages.length || messages.length > 80) throw new Error('Send between 1 and 80 messages.');
  let length = 0;
  for (const m of messages) {
    if (!m || !['user','assistant'].includes(m.role) || typeof m.content !== 'string') throw new Error('Invalid message.');
    length += m.content.length;
  }
  if (length > 100000) throw new Error('Conversation is too long. Start a new chat.');
  if(messages.at(-1).role!=='user')throw new Error('The last message must be from you.');
  return messages.map(m=>({role:m.role,content:redactSecrets(m.content)}));
}

