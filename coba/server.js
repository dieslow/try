var express=require('express');
var bodyParser=require('body-parser');
 
var app=express();
 
app.use(bodyParser.json());
 
app.get('/',function(req,res){
	res.send('get request');
});
 
app.get('/object',function(req,res){
	var obj={nama:'Tanzah Abe',karir:'Developer'};
	res.send(obj);
});
 
app.get('/page.html',function(req,res){
	res.send('<h1>HTML Bro</h1>');
})
 
app.listen(8084);
console.log('listening on port 8084');