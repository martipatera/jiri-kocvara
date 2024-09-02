import mongoose from "mongoose";

const {Schema} = mongoose

const loginSchema = new Schema({
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

export default mongoose.models.RegisterData || mongoose.model("RegisterData", loginSchema);
