const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema

const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    category:{
        type:ObjectId,
        required:true,
        ref: 'Category'
    }
},{timestamps:true})

module.exports=mongoose.model('Blog', BlogSchema)