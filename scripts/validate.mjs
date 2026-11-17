import {readFile,access,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {icon3D} from '../dist/icons.js';
import {articles,worlds,quizzes} from '../dist/content.js';
const ids=new Set(articles.map(x=>x.id));assert.equal(ids.size,articles.length,'Topic IDs must be unique');
for(const a of articles){assert(worlds.some(w=>w.id===a.category),a.id+' category');for(const band of ['6-8','9-11','12-14'])assert(a.levels[band]?.length>(a.id.startsWith('fact-')?25:30),a.id+' '+band);for(const id of a.related)assert(ids.has(id),a.id+' related '+id);if(a.url)assert(a.url.startsWith('https://'),a.id+' secure reference');}
for(const [id,q]of Object.entries(quizzes))for(const item of q.questions)assert(item.options[item.correct],id+' correct answer');
for(const file of ['ai-client.js','conversation.js','science-bank.js','assets/zuno-game-icons-3d.png','icons.js','icons-3d.css','assets/zuno-icons-3d.png','games.js','games.css','game-content.js','legal.js','legal.css','vendor/confetti.min.js','index.html','app.js','content.js','age-tools.js','chat-store.js','chat.css','experiences.js','stories.js','new-content.js','style.css','enhancements.css','solar.js','solar2d.js','sw.js','vendor/three.module.js','vendor/minisearch.min.js','assets/sora.ttf','assets/jakarta.ttf','assets/maps/kenya-counties.geojson','assets/stories-cover.webp','assets/clerkops-light.webp','assets/clerkops-dark.webp','assets/zuno-logo-light-compact.webp','assets/zuno-logo-dark-compact.webp','assets/brand/zuno-logo-light.png','assets/brand/zuno-logo-dark.png'])await access(new URL('../dist/'+file,import.meta.url));
for(const w of worlds)await access(new URL('../dist/assets/'+w.icon+'.webp',import.meta.url));
const css=await readFile(new URL('../dist/style.css',import.meta.url),'utf8');assert(css.includes('prefers-reduced-motion'));assert(css.includes('safe-area-inset-bottom'));assert(css.includes('focus-visible'));
const app=await readFile(new URL('../dist/app.js',import.meta.url),'utf8');for(const match of app.matchAll(/I\('([a-z0-9-]+)'/g))assert(icon3D(match[1]).includes('zuno-3d-icon'));
for(const name of ['THREE-LICENSE.txt','MINISEARCH-LICENSE.txt','LUCIDE-LICENSE.txt','SORA-OFL.txt','JAKARTA-OFL.txt','GEOBOUNDARIES.txt'])assert((await readFile(new URL('../dist/licenses/'+name,import.meta.url),'utf8')).length>200);
const assetFiles=await readdir(new URL('../dist/assets/icons/',import.meta.url));for(const name of assetFiles)assert((await readFile(new URL('../dist/assets/icons/'+name,import.meta.url),'utf8')).includes('<svg'),name+' SVG');
console.log(`Validated ${articles.length} topics, ${worlds.length} categories, ${Object.keys(quizzes).length} quizzes, local assets and licence notices.`);
