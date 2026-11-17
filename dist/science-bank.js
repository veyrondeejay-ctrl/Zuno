// Compact original question bank; factual references are attached to related encyclopedia topics.
const bank={
 space:[
 ['Which planet is closest to the Sun?','Mercury','Venus','Earth','Mars','Mercury has the smallest orbit of the eight planets.'],
 ['Which planet is known for its large, bright ring system?','Saturn','Earth','Mars','Mercury','Saturn’s rings contain many pieces of ice with rock and dust.'],
 ['Which planet has the largest diameter?','Jupiter','Saturn','Neptune','Earth','Jupiter is the largest of the eight planets.'],
 ['Which rocky planet is hottest at its surface?','Venus','Mercury','Mars','Earth','Venus’s thick atmosphere traps heat. Being nearest the Sun is not the only factor.'],
 ['Which world is Earth’s natural satellite?','The Moon','Mars','Venus','The Sun','The Moon orbits Earth; Earth orbits the Sun.'],
 ['What mainly keeps a planet in orbit around the Sun?','Gravity','Magnetism','Friction','Sound','Gravity attracts the planet toward the Sun while the planet keeps moving.'],
 ['A year on a planet measures…','One orbit around its star','One spin on its axis','One cycle of Moon phases','One season','An orbital period is the time to complete a journey around another body.'],
 ['Why do we use a telescope?','To gather light from distant objects','To make stars shine more brightly','To remove gravity from nearby objects','To change a planet’s orbit','Telescopes collect light; they do not change the distant object.'],
 ['Which planet is farthest from the Sun?','Neptune','Uranus','Saturn','Jupiter','Neptune is the outermost of the eight planets.'],
 ['What supplies most of the energy warming Earth’s surface?','Sunlight','Moonlight','Earth’s magnetic field','The motion of ocean tides','Sunlight is Earth’s main external energy supply.'],
 ['How do astronauts breathe outside a spacecraft?','A spacesuit supplies suitable breathing gas','They use the air already in space','Their lungs store enough air for hours','Sunlight produces air in the helmet','Space has no breathable atmosphere; life-support equipment is necessary.'],
 ['A model shows tiny distances between planets. What should you check?','Whether the model uses a consistent scale','Whether every planet has a different colour','Whether the labels use capital letters','Whether the Sun is drawn in yellow','Size and distance scales are often changed in educational models.']
 ],
 water:[
 ['Liquid water changing to water vapour is called…','Evaporation','Condensation','Freezing','Melting','Evaporation is a liquid-to-gas change at the liquid surface.'],
 ['Water vapour changing into liquid drops is called…','Condensation','Evaporation','Melting','Freezing','Cooling moist air can lead to condensation into tiny droplets.'],
 ['Ice warming into liquid water is…','Melting','Freezing','Condensing','Evaporating','Melting changes a solid to a liquid.'],
 ['Liquid water becoming ice is…','Freezing','Melting','Condensing','Evaporating','Freezing changes liquid water into solid ice.'],
 ['Where can rainwater go after reaching the ground?','Into soil, runoff and several other stores','Only straight into the ocean','Only into the atmosphere immediately','Only into plant leaves','Water takes many possible routes through the water cycle.'],
 ['What does a rain gauge measure?','The amount of rainfall','The speed of the wind','The warmth of the air','The height of every cloud','A rain gauge collects precipitation to measure its depth.'],
 ['A river carries small pieces of soil downstream. This is an example of…','Erosion and transport','Condensation','Photosynthesis','Pollination','Moving water can erode and carry sediment.'],
 ['Why is the water cycle described as a cycle?','Water moves between stores and forms repeatedly','Every drop returns along exactly the same route','All water is replaced each year','Water only moves in one direction','Water circulates through many routes; a single drop need not follow a fixed loop.']
 ],
 nature:[
 ['Which feature distinguishes an insect from a spider?','An insect has six legs','An insect always has wings','An insect has eight legs','An insect has no body segments','Insects have six legs; spiders have eight. Not all insects have wings.'],
 ['What do many plant roots take in from soil?','Water and dissolved minerals','Sunlight and oxygen only','Ready-made leaves','Pollen and nectar','Roots absorb water and minerals; leaves typically capture light.'],
 ['What is a habitat?','A living thing’s natural home','Only a nest in a tree','Only a building for animals','A list of everything an animal eats','Habitats supply living things with conditions and resources.'],
 ['Which animal group has feathers?','Birds','Mammals','Amphibians','Reptiles','Feathers distinguish birds among living animal groups.'],
 ['What is pollination?','Pollen moving to a flower’s stigma','Roots absorbing water','A seed growing into a shoot','A leaf releasing water vapour','Pollination can happen through animals, wind and other routes.'],
 ['What do plants use in photosynthesis?','Light, water and carbon dioxide','Moonlight, soil and oxygen only','Only water and minerals','Only food absorbed from the soil','Photosynthesis uses light energy to make sugars from water and carbon dioxide.'],
 ['Which is a decomposer?','A fungus breaking down dead leaves','A bird drinking water','A leaf taking in sunlight','A bee visiting a flower','Decomposers break down dead material and help recycle nutrients.'],
 ['Why can removing one species affect other species?','Food webs connect living things','All species have identical diets','Every animal uses the same habitat','Only the largest animals need food','Living things depend on one another in many connected ways.'],
 ['Which action best helps wildlife stay wild?','Observe from a safe distance','Feed animals to attract them','Move nests to photograph them','Touch young animals to inspect them','Keeping a safe distance reduces disturbance and protects people and animals.'],
 ['Coral reefs are mainly built by…','Tiny animals called coral polyps','Underwater trees','Large floating seaweeds','Pieces of sand growing larger','Reef-building corals are animals, often living with photosynthetic algae.']
 ],
 tech:[
 ['What is an algorithm?','A sequence of instructions for a task','A type of computer screen','A place to store electricity','A picture made only of numbers','An algorithm gives a defined sequence of steps.'],
 ['What is a loop useful for in a program?','Repeating instructions','Making a password visible','Stopping every calculation','Removing all stored data','A loop repeats a block according to its rule.'],
 ['What does debugging mean?','Finding and fixing problems in a program','Deleting every line of code','Adding random instructions','Installing a bigger screen','Testing and careful observation help locate the cause of a bug.'],
 ['What is a browser?','Software for viewing and using websites','The cable carrying electricity','The password for a website','The storage inside a keyboard','A browser requests and displays web content.'],
 ['What is a network?','Connected devices that exchange information','Only a collection of screens','Any picture stored on a computer','A single device with no connections','Devices can exchange data through network connections.'],
 ['Which response is safest when a message asks for your password?','Keep it private and ask a trusted adult','Send it if the message has a logo','Share half of it in the reply','Post it so friends can check it','Passwords are private; a professional-looking message can still be deceptive.'],
 ['What is a variable in a program?','A named value that can change','A button that always closes the app','A fixed picture on the screen','Only the number zero','Variables let a program store and update values.'],
 ['A computer gives a fluent answer. What should you do with an important claim?','Check reliable evidence','Trust it because it sounds confident','Trust it if the paragraph is long','Repeat it until it becomes reliable','Confident wording does not verify a factual claim.'],
 ['What do binary digits use?','Two possible values, commonly 0 and 1','Exactly ten different letters','Only even numbers above ten','An unlimited number of colours','A bit has two possible states; groups of bits represent information.'],
 ['What should you do with an unexpected download link?','Ask a trusted adult before opening it','Open it because it arrived in a chat','Disable security warnings first','Share it with everyone to test it','Unexpected links and downloads can be unsafe even when they look familiar.']
 ],
 experiments:[
 ['A circuit’s switch is open. Why might the bulb stay off?','There is no complete conducting path','The wire contains too much light','The switch produces cold air','The bulb must be brighter than the battery','Current needs a complete conducting path in this simple circuit.'],
 ['Which material usually conducts electricity well?','Copper','Dry plastic','Rubber','Dry wood','Copper is a conductor; many plastics and rubbers are insulators.'],
 ['A magnet strongly attracts which object?','An iron nail','A wooden spoon','A plastic ruler','A glass marble','Iron is attracted strongly by ordinary magnets; not all metals are.'],
 ['What is friction?','A force resisting sliding between surfaces','The pull of a magnetic field only','The energy stored in a battery','The brightness of a light','Friction acts against relative sliding between surfaces.'],
 ['In the ideal model without air resistance, which falls faster from the same height?','Both masses take the same time','The heavier mass always takes half the time','The lighter mass falls faster','Neither mass accelerates','At the same location, ideal free-fall acceleration does not depend on mass.'],
 ['A scientist predicts a result before testing. The prediction should…','Be checked against observations','Replace any need for measurement','Stay unchanged whatever the result','Only describe the hoped-for result','Evidence can support a prediction or show it needs revision.'],
 ['Why repeat a measurement?','To see variation and improve confidence','To guarantee every answer is identical','To make an incorrect idea true','To remove the need for careful tools','Repeated measurements reveal variation; they do not guarantee correctness.'],
 ['Why change one main condition in a simple fair test?','To better isolate its effect','To ensure the result is surprising','To stop all natural variation','To guarantee your prediction is right','Keeping other relevant conditions similar helps you interpret a difference.'],
 ['Red and green light overlap. In an additive light model, the mix looks…','Yellow','Purple','Black','Blue','Additive light mixing differs from mixing paints. Red plus green light can look yellow.'],
 ['A small gear drives a larger gear. What happens to the larger gear?','It turns more slowly in the opposite direction','It turns faster in the same direction','It always stops moving','It turns at exactly the same speed','For meshing gears, tooth count changes the speed ratio and reverses rotation.']
 ]};
export function sciencePractice(age,level,r,existing){const chapter=Math.floor((level-1)/10),type=['space','water','nature','tech','experiments','space','experiments','nature','tech','experiments'][chapter],pool=age==='6-8'?bank[type].slice(0,({space:10,water:6,nature:8,tech:6,experiments:4})[type]):bank[type];const legacy=type==='space'?existing.slice(0,3):type==='nature'?existing.slice(3,6):type==='water'?existing.slice(6,9):[];
 const chosen=pool.map(([q,a,b,c,d,why])=>({q,options:[a,b,c,d],correct:0,why})).concat(legacy);
 for(let i=chosen.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[chosen[i],chosen[j]]=[chosen[j],chosen[i]]}
 return chosen.slice(0,age==='6-8'?4:5).map(p=>{const options=p.options.map((o,i)=>({o,i}));for(let k=options.length-1;k>0;k--){let j=Math.floor(r()*(k+1));[options[k],options[j]]=[options[j],options[k]]}return {...p,options:options.map(x=>x.o),correct:options.findIndex(x=>x.i===p.correct)}})
}
