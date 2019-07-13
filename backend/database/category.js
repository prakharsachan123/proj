var mongoose=require('mongoose');
var cat=mongoose.Schema({
    cname:{type:String,unique:true},
    description:String,
    image:String,
    createdAt:{type:Date,default:Date.now}
})

module.exports=mongoose.model('category',cat);