import fs from 'node:fs';
const data=fs.readFileSync('src/data/projectsData.js','utf8');
const {projects}=await import('data:text/javascript;base64,'+Buffer.from(data).toString('base64'));
const urls=[...new Set(projects.flatMap(p=>[p.liveLink,p.sourceCode]).filter(Boolean))];
const results=[];
for(let i=0;i<urls.length;i+=6){await Promise.all(urls.slice(i,i+6).map(async url=>{try{const r=await fetch(url,{signal:AbortSignal.timeout(12000)});results.push({url,status:r.status,redirect:r.url});}catch(e){results.push({url,status:'unverified',reason:e.cause?.code||e.message});}}));}
fs.writeFileSync('project-link-audit.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results));
