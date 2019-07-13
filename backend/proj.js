const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
// const querystring=require('querystring');
var sha1=require('sha1');
var admindata=require('./database/admin');
const url="mongodb://localhost:27017/angularfullstack";

const app=express();
app.use(cors());
app.use(bodyparser.json());


app.post('/api/adminlogin',function(req,res){
  
    res.json({"data":"inserted"});
     mongoose.connect(url,{useNewUrlParser:true},function(err,db){
         if(err) throw err;
         var data=req.body;
         var email=data.email;
         var pass=sha1(data.password);
         var datas={"email":email,"password":pass};
           let insd=new admindata(datas);
           insd.save(function(err,data){
               if(err) throw err;
               if(data){
                   res.json({'err':0,'msg':'login data saved'});
               }else{
                res.json({'err':1,'msg':'login data not saved'});
               }
           })
        
     })
     // res.json({"hello":"browser"});
     // let email=req.body.email;
     // let password=sha1(req.body.password);
     // console.log(email+" "+password);
     // res.json({"data":"receive"});
 })
 

app.listen(3435,function(req,res){
    console.log("server is running on port 3435");
})
