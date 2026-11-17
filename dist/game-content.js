import {sciencePractice} from './science-bank.js';
// Original ZUNO practice generators. A level is a reproducible practice set, not an AI call.
export const tracks=[
 ['math','Number Galaxy','Add, share, measure. Make numbers work.','math','cyan'],
 ['patterns','Pattern Planet','Spot the rule. Think one step ahead.','tech','purple'],
 ['english','Word Workshop','Build vocabulary, sentences and meaning.','art','pink'],
 ['kiswahili','Safari ya Maneno','Discover everyday Kiswahili, step by step.','kenya','orange'],
 ['crossword','Crossword Cove','Clues, crossings and little light-bulb moments.','history','blue'],
 ['memory','Memory Orbit','Turn, remember and connect matching ideas.','space','purple'],
 ['code','Rover Routes','Code a route. Test it. Make it better.','tech','blue'],
 ['science','Discovery Quest','Space, nature, science and digital thinking.','science','cyan']
].map(([id,title,description,art,color])=>({id,title,description,art,color}));
export const ages=['6-8','9-11','12-14'];
export function random(seed){let a=seed>>>0;return ()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return ((t^t>>>14)>>>0)/4294967296}}
export function shuffled(a,r){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b}
const vocab=`sun|The star at the centre of our solar system
moon|Earth's natural satellite
rain|Water drops falling from clouds
seed|A tiny plant starter
leaf|A plant part that captures sunlight
root|A plant part that takes in water from soil
bird|An animal with feathers
fish|A water animal with gills
book|A collection of written pages
star|A huge glowing ball of gas
nest|A home built by many birds
tree|A tall plant with a woody trunk
frog|An amphibian that begins life as a tadpole
wing|A body part used by birds in flight
pond|A small body of still fresh water
rock|A solid natural material made of minerals
sand|Tiny grains of worn-down rock
wind|Moving air
soil|The upper ground where many plants grow
lake|A body of water surrounded by land
river|Water flowing along a natural channel
ocean|A vast body of salty water
cloud|Tiny water drops or ice floating in the sky
planet|A world that orbits a star
orbit|The path one object follows around another
energy|What makes change and movement possible
magnet|An object that attracts iron
insect|An animal with six legs and three main body parts
pollen|Grains made by the male parts of flowers
shadow|A dark area where light is blocked
habitat|The natural home of a living thing
gravity|The attraction between objects with mass
circuit|A complete path that electric current can follow
friction|A force that resists sliding between surfaces
battery|A device that stores energy chemically
volcano|An opening where hot material escapes from Earth
recycle|To process used material into new material
predict|To say what might happen using evidence
observe|To notice carefully using your senses or tools
compare|To look for similarities and differences
pattern|A sequence following a rule
fraction|A number representing part of a whole
digital|Using discrete values, often binary digits
browser|Software used to view websites
network|Connected devices that exchange information
password|A secret used to help protect an account
algorithm|A sequence of instructions to solve a task
variable|A named value that can change in a program
evidence|Information used to support or challenge a claim
estimate|A sensible approximate calculation
adaptation|A feature that helps a living thing survive
photosynthesis|How plants use light to make sugars
biodiversity|The variety of living things in an area
evaporation|Liquid changing to gas at its surface
condensation|Gas changing into liquid
pollination|The movement of pollen to a flower's stigma
renewable|Able to be replenished naturally on human timescales
hypothesis|A testable proposed explanation
coordinate|A value used to locate a point
prototype|An early model used to test a design`.split('\n').map(x=>x.split('|'));
export const words=vocab.map(([word,clue])=>({word:word.toUpperCase(),clue}));
export const swahili=`water|maji
sun|jua
moon|mwezi
star|nyota
tree|mti
book|kitabu
school|shule
friend|rafiki
house|nyumba
cat|paka
dog|mbwa
bird|ndege
fish|samaki
lion|simba
elephant|tembo
rain|mvua
fire|moto
earth or soil|udongo
flower|ua
fruit|tunda
child|mtoto
teacher|mwalimu
road|barabara
river|mto
mountain|mlima
sea|bahari
lake|ziwa
forest|msitu
garden|bustani
food|chakula
milk|maziwa
bread|mkate
salt|chumvi
sugar|sukari
table|meza
chair|kiti
door|mlango
window|dirisha
pen|kalamu
paper|karatasi
one|moja
two|mbili
three|tatu
four|nne
five|tano
six|sita
seven|saba
eight|nane
nine|tisa
ten|kumi
thank you|asante
please|tafadhali
welcome|karibu
goodbye|kwaheri
peace|amani
work|kazi
time|wakati
question|swali
answer|jibu
knowledge|maarifa`.split('\n').map(s=>s.split('|'));
const antonyms=[['bright','dim'],['generous','selfish'],['ancient','modern'],['scarce','abundant'],['expand','shrink'],['cautious','reckless'],['fragile','sturdy'],['include','exclude'],['temporary','permanent'],['transparent','opaque'],['accurate','inaccurate'],['arrive','depart']];
const synonyms=[['tiny','small'],['rapid','quick'],['silent','quiet'],['enormous','huge'],['curious','inquisitive'],['observe','notice'],['assist','help'],['courageous','brave'],['essential','necessary'],['accurate','correct'],['predict','forecast'],['construct','build']];
const sentences=[['The curious robot ___ a new planet.','discovers','discover','discovering','discovery'],['Yesterday, Amani ___ a seed.','planted','plants','plant','planting'],['The two explorers ___ ready.','are','is','was','be'],['Nia and I ___ building a rover.','are','am','is','was'],['The water ___ into the pond.','flows','flow','flowing','flowed yesterday'],['Neither answer ___ supported by the evidence.','is','are','were','be'],['If the battery is flat, the bulb ___ light.','will not','does','has','did'],['We checked the result ___ we recorded it.','before','unless','despite','during'],['The scientist, who studies insects, ___ here.','works','work','working','were'],['The rover moved slowly ___ the ground was uneven.','because','although','unless','despite']];
const Q=(q,answer,others,why,r)=>{const options=shuffled([...new Set([String(answer),...others.map(String)])].slice(0,4),r);return {q,options,correct:options.indexOf(String(answer)),why}};
function numberQ(q,n,why,r,step=1){const vals=[n-step,n+step,n+step*2,n-step*2,n+step*3].filter(x=>x!==n);return Q(q,n,shuffled(vals,r),why,r)}
export function chapterTitle(track,level,age){const c=Math.floor((level-1)/10);const titles={math:age==='6-8'?['Number bonds','Take away','Missing numbers','Pairs & groups','Sharing fairly','Skip counting','Money thinking','Time steps','Shape measures','Mixed missions']:age==='9-11'?['Mental maths','Missing numbers','Multiplication','Division','Fractions','Decimals','Percentages','Perimeter','Time & money','Mixed missions']:['Signed numbers','Equations','Fractions','Decimals','Percentages','Ratio','Area & volume','Probability','Powers','Mixed missions'],patterns:['Keep the pattern','Find the gap','Count backwards','Alternating rules','Growing steps','Number machines','Two-step thinking','Square patterns','Letter codes','Logic remix'],english:['Word meanings','Word partners','Opposites','Sentence sense','Word meanings II','Precise words','Opposites II','Grammar workshop','Meaning in context','Language remix'],kiswahili:['Around us','Living things','Home & school','Nature words','Food & objects','Number words','Polite phrases','Translate both ways','Word detective','Maneno remix'],crossword:['Tiny crossings','Nature clues','Word explorers','Everyday ideas','Science words','Around our world','Clue detectives','Connected ideas','Deep thinkers','Crossword remix'],memory:['First pairs','Remember places','Look for details','New arrangements','Pair explorers','Memory trails','Spot connections','Orbit puzzles','Recall challenge','Memory remix'],code:['First instructions','Find a route','Around obstacles','Plan then move','Rover explorer','Debug the route','Shorter programs','Think ahead','Route architect','Rover remix'],science:['Space detective','Water explorer','Nature observer','Digital thinker','Science practice','Space connections','Test an idea','Nature connections','Tech detective','Discovery remix']};return (titles[track]||titles.science)[c]}
function maths(level,age,r,i){const c=Math.floor((level-1)/10),d=(level-1)%10,rank=ages.indexOf(age),a=2+Math.floor(r()*(8+d*2+rank*25)),b=2+Math.floor(r()*(5+rank*7)),pick=rank===0?c:rank===1?c:c;
 if(rank===0){switch(pick){case 0:return numberQ(`${a} + ${b} = ?`,a+b,`Start at ${a} and add ${b}. The total is ${a+b}.`,r);case 1:return numberQ(`${a+b} − ${b} = ?`,a,`Take ${b} away from ${a+b}.`,r);case 2:return numberQ(`? + ${b} = ${a+b}`,a,`${a+b} − ${b} = ${a}.`,r);case 3:return numberQ(`${b} groups of ${a} counters. How many altogether?`,a*b,`${b} × ${a} = ${a*b}.`,r,a);case 4:return numberQ(`${a*b} stickers shared equally among ${b} children. Each gets…`,a,`${a*b} ÷ ${b} = ${a}.`,r);case 5:return numberQ(`${b}, ${b*2}, ${b*3}, ?`,b*4,`Add ${b} each time.`,r,b);case 6:return numberQ(`You have ${a+b} coins and use ${b}. How many remain?`,a,`${a+b} − ${b} = ${a}.`,r);case 7:return numberQ(`It is ${b} o’clock. What hour is it ${2} hours later?`,(b+2)%12||12,`Move forward two hours on a 12-hour clock.`,r);case 8:return numberQ(`A square has sides of ${b} cm. What is its perimeter in cm?`,b*4,`Four equal sides: 4 × ${b}.`,r,b);default:return numberQ(`${a} + ${b} − ${b-1} = ?`,a+1,`Adding ${b} then taking away ${b-1} leaves one extra.`,r)}}
 if(rank===1){switch(pick){case 0:return numberQ(`${a*3} + ${b*4} = ?`,a*3+b*4,`Add the tens and ones, then combine: ${a*3+b*4}.`,r);case 1:return numberQ(`4 × ? = ${a*4}`,a,`Divide ${a*4} by 4.`,r);case 2:return numberQ(`${a} × ${b} = ?`,a*b,`${a} groups of ${b} make ${a*b}.`,r,b);case 3:return numberQ(`${a*b} ÷ ${b} = ?`,a,`Multiplication checks division: ${a} × ${b} = ${a*b}.`,r);case 4:return numberQ(`What is 1/${b} of ${a*b}?`,a,`Divide ${a*b} into ${b} equal parts.`,r);case 5:{const n=(a+b)/10;return Q(`${a}/10 + ${b}/10 = ?`,n.toFixed(1),[(n+.1).toFixed(1),(n-.1).toFixed(1),((a+b)/100).toFixed(2)],'The denominators are equal, so add the numerators.',r)}case 6:return numberQ(`What is 10% of ${a*10}?`,a,`10% means one tenth: ${a*10} ÷ 10.`,r);case 7:return numberQ(`Rectangle: ${a} cm by ${b} cm. Perimeter in cm?`,2*(a+b),`Add all sides: 2 × (${a} + ${b}).`,r,2);case 8:return numberQ(`A trip takes ${a} minutes, then ${b} more. Total minutes?`,a+b,`Combine both durations: ${a} + ${b}.`,r);default:return numberQ(`(${a} + ${b}) × 2 = ?`,(a+b)*2,'Brackets first, then multiply by 2.',r,2)}}
 switch(pick){case 0:return numberQ(`${b} − ${a+b} = ?`,-a,`Subtracting ${a+b} from ${b} moves ${a} below zero.`,r);case 1:return numberQ(`3x + ${b} = ${a*3+b}. What is x?`,a,`Subtract ${b}, then divide by 3.`,r);case 2:return numberQ(`What is 3/4 of ${a*4}?`,a*3,`Divide by 4 then multiply by 3.`,r,a);case 3:{const n=a*b/100;return Q(`${(a/10).toFixed(1)} × ${(b/10).toFixed(1)} = ?`,n.toFixed(2),[(n*10).toFixed(2),(n+.1).toFixed(2),(n+.01).toFixed(2)],`Multiply ${a} by ${b}, then divide by 100.`,r)}case 4:return numberQ(`What is 25% of ${a*4}?`,a,'25% is one quarter; divide by 4.',r);case 5:return numberQ(`Red : blue = 2 : 3. There are ${a*2} red beads. How many blue?`,a*3,`One ratio unit is ${a}. Blue uses three units.`,r,a);case 6:return numberQ(`A triangle has base ${a*2} cm and height ${b} cm. Area in cm²?`,a*b,'Triangle area = base × perpendicular height ÷ 2.',r,a);case 7:return Q(`A bag holds ${b} blue and ${a} red counters. P(blue)?`,`${b}/${a+b}`,[`${a}/${a+b}`,`${b}/${a}`,`${a+b}/${b}`],'Favourable outcomes ÷ total equally likely outcomes.',r);case 8:{let n=b%7+2;return numberQ(`${n}² = ?`,n*n,'A square means multiply the number by itself.',r,n)}default:return numberQ(`${a} + ${b} × 3 = ?`,a+b*3,'Multiplication comes before addition.',r,b)}
}
function patterns(level,age,r){const c=Math.floor((level-1)/10),rank=ages.indexOf(age),a=1+Math.floor(r()*15),b=2+Math.floor(r()*(rank*4+3));switch(c){case 0:return numberQ(`${a}, ${a+b}, ${a+2*b}, ?`,a+3*b,`Add ${b} at every step.`,r,b);case 1:return numberQ(`${a}, ?, ${a+2*b}, ${a+3*b}`,a+b,`The gap is ${b}.`,r);case 2:return numberQ(`${a+4*b}, ${a+3*b}, ${a+2*b}, ?`,a+b,`Subtract ${b} each time.`,r,b);case 3:return numberQ(`${a}, ${a+b}, ${a+b+1}, ${a+2*b+1}, ?`,a+2*b+2,`Alternate +${b} and +1.`,r);case 4:return numberQ(`${a}, ${a+1}, ${a+3}, ${a+6}, ?`,a+10,'The increases are 1, 2, 3, then 4.',r);case 5:return numberQ(`Machine rule: × ${b}, then + 1. Input ${a}. Output?`,a*b+1,'Follow both instructions in order.',r,b);case 6:return numberQ(`A robot moves ${b} squares forward and 1 back, ${a} times. Net squares?`,(b-1)*a,`Each pair of moves gains ${b-1}.`,r,a);case 7:{let n=a%7+2;return numberQ(`${n*n}, ${(n+1)**2}, ${(n+2)**2}, ?`,(n+3)**2,'These are consecutive square numbers.',r,n)}case 8:{let n=a%15;return Q(`Alphabet steps: ${String.fromCharCode(65+n)}, ${String.fromCharCode(67+n)}, ${String.fromCharCode(69+n)}, ?`,String.fromCharCode(71+n),[String.fromCharCode(70+n),String.fromCharCode(72+n),String.fromCharCode(73+n)],'Move two places in the alphabet each time.',r)}default:return numberQ(`${a}, ${a*2}, ${a*4}, ?`,a*8,'Double the previous number.',r,a)}}
function language(track,level,age,r,i){const rank=ages.indexOf(age),c=Math.floor((level-1)/10),n=(level*3+i*7+rank*13);
 if(track==='kiswahili'){const list=swahili,topic=swahili.slice(Math.min(54,c*6),Math.min(60,c*6+6)),p=topic[n%topic.length],reverse=c>=7&&(i%2===0);const at=reverse?0:1;return Q(reverse?`What does “${p[1]}” mean?`:`Which Kiswahili word means “${p[0]}”?`,p[at],shuffled(list.filter(x=>x[at]!==p[at]),r).slice(0,3).map(x=>x[at]),`“${p[1]}” means “${p[0]}” in this context.`,r)}
 if([1,5].includes(c)){const synPool=rank===0?synonyms.slice(0,6):synonyms,p=synPool[n%synPool.length];return Q(`Which word is closest in meaning to “${p[0]}”?`,p[1],shuffled(synonyms.filter(x=>x[1]!==p[1]),r).slice(0,3).map(x=>x[1]),`“${p[0]}” and “${p[1]}” have similar meanings.`,r)}
 if([2,6].includes(c)){const antPool=rank===0?antonyms.slice(0,5):antonyms,p=antPool[n%antPool.length];return Q(`Which word is the opposite of “${p[0]}”?`,p[1],shuffled(antonyms.filter(x=>x[1]!==p[1]),r).slice(0,3).map(x=>x[1]),`“${p[1]}” is an opposite of “${p[0]}”.`,r)}
 if([3,7,9].includes(c)){const pool=rank===0?sentences.slice(0,5):sentences,p=pool[n%pool.length];return Q(p[0],p[1],p.slice(2),`The completed sentence is: ${p[0].replace('___',p[1])}`,r)}
 const pool=words.slice(rank===0?0:rank===1?15:30,rank===0?24:rank===1?48:60),p=pool[n%pool.length];return Q(`${p.clue}. Which word fits?`,p.word.toLowerCase(),shuffled(pool.filter(x=>x.word!==p.word),r).slice(0,3).map(x=>x.word.toLowerCase()),`${p.word.toLowerCase()}: ${p.clue}.`,r)
}
export function crossword(level,age){const rank=ages.indexOf(age),r=random(level*199+rank*991),pool=words.slice(rank===0?0:rank===1?8:22,rank===0?25:rank===1?48:60);let chosen=shuffled(pool,r),target=rank===0?4:rank===1?5:6;const placed=[];const cells=new Map();
 const put=(w,x,y,dir)=>{for(let k=0;k<w.word.length;k++)cells.set(`${x+(dir==='a'?k:0)},${y+(dir==='d'?k:0)}`,w.word[k]);placed.push({...w,x,y,dir})};put(chosen[0],0,0,'a');
 for(const w of chosen.slice(1)){if(placed.length>=target)break;let found=false;for(const old of shuffled(placed,r)){if(found)break;for(let i=0;i<w.word.length&&!found;i++)for(let j=0;j<old.word.length&&!found;j++){if(w.word[i]!==old.word[j])continue;const dir=old.dir==='a'?'d':'a',ix=old.x+(old.dir==='a'?j:0),iy=old.y+(old.dir==='d'?j:0),x=ix-(dir==='a'?i:0),y=iy-(dir==='d'?i:0);let crossings=0,ok=true;
 if(cells.has(`${x-(dir==='a'?1:0)},${y-(dir==='d'?1:0)}`)||cells.has(`${x+(dir==='a'?w.word.length:0)},${y+(dir==='d'?w.word.length:0)}`))continue;
 for(let k=0;k<w.word.length;k++){const xx=x+(dir==='a'?k:0),yy=y+(dir==='d'?k:0),v=cells.get(`${xx},${yy}`);if(v){if(v!==w.word[k])ok=false;crossings++}else if(cells.has(`${xx+(dir==='a'?0:1)},${yy+(dir==='a'?1:0)}`)||cells.has(`${xx-(dir==='a'?0:1)},${yy-(dir==='a'?1:0)}`))ok=false}if(ok&&crossings===1){put(w,x,y,dir);found=true}}}}
 const coords=[...cells.keys()].map(k=>k.split(',').map(Number)),minX=Math.min(...coords.map(c=>c[0])),minY=Math.min(...coords.map(c=>c[1]));const entries=placed.map(w=>({...w,x:w.x-minX,y:w.y-minY}));const numbers=new Map();entries.sort((a,b)=>a.y-b.y||a.x-b.x).forEach(w=>{const key=`${w.x},${w.y}`;if(!numbers.has(key))numbers.set(key,numbers.size+1);w.number=numbers.get(key)});
 return {entries,cells:[...cells].map(([k,answer])=>{let [x,y]=k.split(',').map(Number);x-=minX;y-=minY;return {x,y,answer,number:numbers.get(`${x},${y}`)||0}}),width:Math.max(...coords.map(c=>c[0]))-minX+1,height:Math.max(...coords.map(c=>c[1]))-minY+1}
}
export function makeLevel(track,level,age,science=[]){if(!tracks.some(t=>t.id===track)||!ages.includes(age)||!Number.isInteger(level)||level<1||level>100)throw Error('Invalid practice level');const r=random(level*7919+ages.indexOf(age)*131+track.length*17),count=age==='6-8'?4:5;
 if(track==='code'){const size=(age==='6-8'?4:age==='9-11'?5:6)+(level>60?1:0),start=(size-1)*size,goal=size-1,path=[start];let pos=start;while(pos!==goal){const right=pos%size<size-1,up=pos>=size;pos+=right&&up?(r()<.5?1:-size):right?1:-size;path.push(pos)}const blocked=Array.from({length:size*size},(_,i)=>i).filter(i=>!path.includes(i)&&r()<(.12+level/300));return {kind:'code',size,start,goal,blocked,target:size*2-2};}
 if(track==='crossword')return {kind:'crossword',puzzle:crossword(level,age)};
 if(track==='memory'){const pairs=Math.min(age==='6-8'?6:8,2+Math.floor((level-1)/20)+ages.indexOf(age));const ids=shuffled([0,2,3,4,5,9,11,12,13,14,15,16,17,27,28,29],r).slice(0,pairs);return {kind:'memory',cards:shuffled(ids.flatMap(id=>[id,id]),r),pairs}}
 if(track==='science')return {kind:'questions',questions:sciencePractice(age,level,r,science)};
 const questions=Array.from({length:count},(_,i)=>track==='math'?maths(level,age,r,i):track==='patterns'?patterns(level,age,r):track==='science'?(()=>{if(!science.length)throw Error('Discovery questions unavailable');const p=science[(level*5+i*7)%science.length];const order=shuffled(p.options.map((o,i)=>({o,i})),r);return {...p,options:order.map(x=>x.o),correct:order.findIndex(x=>x.i===p.correct)}})():language(track,level,age,r,i));return {kind:'questions',questions}
}
