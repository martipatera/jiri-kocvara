const mongoose = require("mongoose")

const {Schema} = mongoose

const loginSchema = new Schema({

    
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    registerCode:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.models.RegisterData || mongoose.model("RegisterData", loginSchema);
