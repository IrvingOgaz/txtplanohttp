const http=require('http');

const hostnmae= '192.168.1.111';

const port=3000;

const server=http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader('Content-Type','text/plain');
res.end('hola mundo');
});
server.listen(port,hostname,()=>{
console.log('el servidor se esta ejecutando en http://${hostname}:${port}/');});