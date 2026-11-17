import test from 'node:test';
import assert from 'node:assert/strict';
import {facts,factBands,factForAge} from '../dist/facts-bank.js';

test('Did You Know has 300 distinct base facts and 900 complete age editions',()=>{
 assert.equal(facts.length,300);
 assert.equal(new Set(facts.map(f=>f.id)).size,300);
 assert.equal(new Set(facts.map(f=>f.title.toLowerCase())).size,300);
 assert.deepEqual(factBands,['6-8','9-11','12-14']);
 assert.equal(facts.flatMap(f=>Object.values(f.levels)).length,900);
 for(const f of facts){
  assert.match(f.id,/^fact-[a-z0-9-]+$/);
  assert.equal(new Set(Object.values(f.levels)).size,3,f.id+' distinct editions');
  for(const age of factBands){
   const text=factForAge(f,age);
   assert.equal(typeof text,'string',f.id+' '+age);
   assert.ok(text.length>25,f.id+' '+age+' complete text');
   assert.ok(!/\b(?:lorem ipsum|coming soon|TODO)\b/i.test(text));
  }
  assert.ok(f.source.length>8,f.id+' reference name');
  assert.match(f.url,/^https:\/\//,f.id+' secure reference');
 }
});

test('reading bands add explanation rather than duplicating a sentence with an age prefix',()=>{
 for(const f of facts){
  const simple=f.levels['6-8'],middle=f.levels['9-11'],advanced=f.levels['12-14'];
  assert.ok(!middle.endsWith(simple),f.id+' independently written middle');
  assert.ok(!advanced.endsWith(middle),f.id+' independently written advanced');
  assert.ok(advanced.length>simple.length,f.id+' advanced context');
 }
 assert.equal(factForAge(facts[0],'invalid'),facts[0].levels['9-11']);
});

test('references include primary science, computing and Kenyan heritage institutions',()=>{
 const hosts=new Set(facts.map(f=>new URL(f.url).hostname));
 for(const host of ['science.nasa.gov','www.noaa.gov','oceanservice.noaa.gov','www.usgs.gov','www.kew.org','nationalzoo.si.edu','science.education.nih.gov','developer.mozilla.org','whc.unesco.org','museums.or.ke','www.nobelprize.org','klrc.go.ke'])assert.ok(hosts.has(host),host);
});
