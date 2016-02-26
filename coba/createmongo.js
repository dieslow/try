// SETUP
var express=require("express");
var mongoose=require("mongoose");
var app=express();
 
mongoose.connect("localhost:27017/mean");
 
var Schema=mongoose.Schema;
var commentSchema=new Schema({
        author:String,
        text:String
});
var Comment=mongoose.model("Comment",commentSchema);
//SETUP
 
app.get("/",function(req,res){
        
  var newComment=new Comment({
    "author" : "Abe",
    "text" : "Selamat Belajar"
  });
  
  newComment.save(function(error){
    if(error)
      return res.send(error);
    
    res.send("saved");
  });
});