/**
 * Created by Emir on 18/03/2019.
 */
/**
 * Created by Emir on 18/03/2019.
 */
var mongoose=require('mongoose');

var MediaSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    uploadDate:{type:Date,default:new Date()},
})
var todoSchema=new mongoose.Schema({
    text:{type:String,required:true,trim:true},
    completed:{type:Boolean,default:false},
    completedAt:{type:Number,default:null},
    medias:[MediaSchema]
})
module.exports=mongoose.model('Todo',todoSchema)
