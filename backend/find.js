var express=require('express');
var app=express();
var cors=require('cors');
var bodyparser=require('body-parser');
var mongodb=require('mongodb');
var mongoose=require('mongoose');

var sha1=require('sha1');
var admindata=require('./database/admin');
var catmodel=require('./database/category');

//Multer For Images Upload
var multer=require('multer');
var path=("./attach");
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
    }
  })
  
  let upload = multer({ storage: storage }).single('Image');

url="mongodb://localhost:27017/angularfullstack";
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex: true});



//All MiddleWares
app.use(cors());
app.use(bodyparser.json());
app.use("/images",express.static("attach"));

//All APIs

//FIND API
app.post("/api/adminlogin",function(req,res){
    
        var email=req.body.email;
        var pass=sha1(req.body.password);
        var datas=({'email':email,'password':pass})
        admindata.find(datas,function(err,result){
            if(err) throw err;
           if(result){
               res.json({'err':0,'msg':'login successfully','user':email});
           }
           else{
               res.json({'err':1,'msg':'not matched data ','user':email});
           }
      
        })
    })
   


//Add Category Api
app.post("/api/addCategory",function(req,res){

     upload(req,res,function(err,result){
         if(err) throw err
         let cname=req.body.cname;
         let description=req.body.description;
         let Imgname=req.file.filename;
         let datas=({'cname':cname,'description':description,'image':Imgname});
         let insd=new catmodel(datas);
         insd.save(function(err,result){
             if(err) throw err
             if(result){
                 console.log('add category successfully');
                 res.json({'err':0,'msg':'add category successfully'});
             }
         })
     })

 })

 //Get Category To Show Api

 app.get("/api/getCategory",function(req,res){
     catmodel.find({},function(err,result){
         if(err) throw err
         if(result){
             res.json({'err':0,'msg':'find data','cdata':result});
         }else{
             res.json({'err':1,'msg':'data not found'});
         }
     })
 })

 //Delete Category
 app.delete("/api/delCat/:id",function(req,res){
     let id=req.params.id;
     
     catmodel.deleteOne({_id:id},function(err,result){
         if (err) throw err
         else{
             console.log('Category deleted');
             res.json({'err':0,'msg':'data deleted'});
         }
     })
 })
 
 // Fetch data in Edit Category form
 app.get("/api/fetchData/:id",function(req,res){
     let id=req.params.id;
    catmodel.findById({_id:id},function(err,result){
        if(err) throw err
        if(result){
           console.log('data found in edit Category',result);
           res.json({'err':0,'msg':'data found','cdata':result});
        }
    })
 })

 // Change Password
 app.post("/api/changePassword",function(req,res){
    let uid=req.body.uid;
    let op=sha1(req.body.op);
    let np=sha1(req.body.np);
    console.log(uid)
    users.find({'email':uid},function(err,data){
        if(err) throw err
        else{
            let upass=data.pass;
            console.log(upass);
        }
    })
 })


app.listen(3000,function(){
    console.log('server is running on port 3000');
})


