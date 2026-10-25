import {mkdir,readFile,writeFile,readdir,cp,rm} from 'node:fs/promises';
import path from 'node:path';
await rm('public',{recursive:true,force:true});
await cp('src','public',{recursive:true});
for(const file of await readdir('assets')){const entries=JSON.parse(await readFile('assets/'+file,'utf8'));for(const [name,data] of Object.entries(entries)){const dest=path.join('public',name);await mkdir(path.dirname(dest),{recursive:true});await writeFile(dest,Buffer.from(data,'base64'));}}
console.log('Brandly static site built in public/');
