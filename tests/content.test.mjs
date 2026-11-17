import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {articles,quizzes} from '../dist/content.js';
import {sectionsFor,quizFor,codeConfig,shuffleQuestion} from '../dist/age-tools.js';
import {welcomeMessages} from '../dist/welcome-messages.js';
const bands=['6-8','9-11','12-14'];
test('shuffled choices preserve the correct answer without mutating the bank',()=>{for(const id of Object.keys(quizzes))for(const age of bands)for(const item of quizFor(id,age,quizzes).questions){const before=JSON.stringify(item);for(const random of [()=>0,()=>.49,()=>.99]){const shuffled=shuffleQuestion(item,random);assert.equal(shuffled.options[shuffled.correct],item.options[item.correct]);assert.deepEqual([...shuffled.options].sort(),[...item.options].sort());}assert.equal(JSON.stringify(item),before)}});
test('welcome headers contain eighty distinct original messages',()=>{assert.equal(welcomeMessages.home.length,40);assert.equal(welcomeMessages.chat.length,40);for(const group of Object.values(welcomeMessages))assert.equal(new Set(group).size,40)});
test('all discoveries have complete, distinct age editions and valid connections',()=>{
  const ids=new Set(articles.map(a=>a.id));
  for(const a of articles){
    assert.equal(new Set(bands.map(b=>a.levels[b])).size,3,a.id+' distinct lead');
    for(const b of bands){
      const sections=sectionsFor(a,b);
      assert(sections?.length>=(a.id.startsWith('fact-')?0:a.kind==='wow'?1:2),a.id+' sections '+b);
      for(const [title,text] of sections){assert(title?.length>3);assert(text?.length>20,a.id+' text '+b);}
    }
    for(const id of a.related)assert(ids.has(id));
  }
});
test('each age quiz has valid answers and teaching feedback',()=>{
  for(const id of Object.keys(quizzes))for(const age of bands){
    const q=quizFor(id,age,quizzes);
    assert.equal(q.questions.length,3);
    for(const question of q.questions){assert(question.options[question.correct]);assert(question.why.length>10);}
  }
  for(const id of Object.keys(quizzes))assert.equal(new Set(bands.map(b=>quizFor(id,b,quizzes).questions[0].q)).size,3);
});
test('all age-sized coding boards are solvable within the displayed target',()=>{
  for(const age of bands){
    const c=codeConfig(age),start=c.size*(c.size-1),goal=c.size-1;
    const queue=[[start,0]],visited=new Set([start]);let distance;
    for(let i=0;i<queue.length;i++){
      const [p,d]=queue[i];if(p===goal){distance=d;break;}
      const candidates=[p-c.size,p+c.size];if(p%c.size)candidates.push(p-1);if(p%c.size<c.size-1)candidates.push(p+1);
      for(const n of candidates)if(n>=0&&n<c.size*c.size&&!c.walls.includes(n)&&!visited.has(n)){visited.add(n);queue.push([n,d+1]);}
    }
    assert.equal(distance,c.target,age);assert(distance<=c.max);assert(!c.walls.includes(start));assert(!c.walls.includes(goal));
  }
});
test('county learning map contains all 47 distinct named polygon features',async()=>{
  const map=JSON.parse(await readFile(new URL('../dist/assets/maps/kenya-counties.geojson',import.meta.url),'utf8'));
  assert.equal(map.features.length,47);assert.equal(new Set(map.features.map(f=>f.properties.shapeName)).size,47);
  for(const f of map.features){assert(['Polygon','MultiPolygon'].includes(f.geometry.type));assert(f.properties.shapeName);}
});
