var express=require("express");

var mysql=require("mysql");

var app=express();


var router=express.Router();

router.get("/Sum",function(req,res){
   var a=req.query.a;
   var b=req.query.b;
   var c=parseInt(a)+parseInt(b);
   res.status(200).send(c);
});

app.use("/",router());
app.listen("15454",function(){
    console.log("i am listening from 15454 .....")
});