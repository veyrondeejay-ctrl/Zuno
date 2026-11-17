import test from 'node:test';
import assert from 'node:assert/strict';
import {CubePuzzle,cubeConfig,scrambleFor,faceGrid,cubePage,cubeUnlocked} from '../dist/cube.js';
test('adapted cube rotations preserve cubies and sticker counts, inverse turns and four-turn identity',()=>{
 for(const size of [2,3])for(const axis of ['x','y','z'])for(const layer of [-((size-1)/2),(size-1)/2])for(const direction of [-1,1]){
  const p=new CubePuzzle(size),before=JSON.stringify(p.cubies);const m={axis,layer,direction};p.move(m);assert.equal(p.isSolved(),false);assert.equal(p.stickers().length,6*size*size);p.undo();assert.equal(p.isSolved(),true);assert.equal(JSON.stringify(p.cubies),before);p.redo();for(let i=0;i<3;i++)p.move(m);assert.equal(p.isSolved(),true);
 }
});
test('all sixty age/level challenges are deterministic, initially unsolved and reversible',()=>{
 for(const age of ['6-8','9-11','12-14'])for(let level=1;level<=20;level++){
  const c=cubeConfig(age,level),moves=scrambleFor(c),p=new CubePuzzle(c.size);assert.deepEqual(moves,scrambleFor(c));assert.equal(moves.length,c.turns);moves.forEach(m=>p.move(m));assert.equal(p.isSolved(),false,age+':'+level);for(const grid of faceGrid(p))assert.equal(grid.filter(v=>v>=0).length,c.size*c.size);moves.slice().reverse().forEach(m=>p.move({...m,direction:-m.direction}));assert.equal(p.isSolved(),true,age+':'+level);
 }
});
test('invalid moves fail without mutating cube',()=>{const p=new CubePuzzle(2),state=JSON.stringify(p.cubies);for(const m of [{axis:'q',layer:.5,direction:1},{axis:'x',layer:0,direction:1},{axis:'x',layer:.5,direction:2}])assert.throws(()=>p.move(m));assert.equal(JSON.stringify(p.cubies),state);assert.throws(()=>new CubePuzzle(4));});
test('visual solved detection recognises an entire rotated cube',()=>{for(const size of [2,3]){const p=new CubePuzzle(size);for(let i=0;i<size;i++)p.move({axis:'x',layer:i-p.edge,direction:1});assert.equal(p.isSolved(),true)}});
test('age configuration increases difficulty and basic deep links are guarded',()=>{assert.equal(cubeConfig('6-8',1).size,2);assert.equal(cubeConfig('6-8',11).size,3);assert.ok(cubeConfig('12-14',1).turns>cubeConfig('6-8',1).turns);assert.equal(cubeUnlocked('9-11',1),true);assert.equal(cubeUnlocked('9-11',2),false);assert.equal(cubeUnlocked('9-11',20,true),true);assert.match(cubePage('9-11',2),/Finish the earlier/);assert.match(cubePage('9-11',2,{admin:true}),/data-cube-level="2"/);});
