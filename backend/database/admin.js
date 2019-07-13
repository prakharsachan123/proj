var mongoose=require('mongoose');
var admin=mongoose.Schema({
    'email':{type:String,unique:true},
    'password':String
})
module.exports=mongoose.model('adminlogin',admin);