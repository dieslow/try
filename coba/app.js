var http=require('http');
 
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/plain'});
  res.end('Hello Node.js');
}).listen(212,'127.0.0.1');
 
console.log('Application running on http://127.0.0.1:212');