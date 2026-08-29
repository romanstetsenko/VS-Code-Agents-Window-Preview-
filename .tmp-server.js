const http=require('http'),fs=require('fs'),path=require('path');
const root=process.cwd();
const types={'.html':'text/html','.png':'image/png','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.json':'application/json'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  const fp=path.join(root,p);
  fs.readFile(fp,(e,d)=>{ if(e){res.writeHead(404);res.end('nf');return;} res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'application/octet-stream'});res.end(d); });
}).listen(8099,'127.0.0.1',()=>console.log('up'));
