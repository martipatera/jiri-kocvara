import mongoose from "mongoose";

const {Schema} = mongoose

const messageSchema = new Schema({

    
    author:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },

    subject:{
        type:String,
        required: true
    },
    message:{
        type:String,
        required:true
    },
},{timestamps:true})

export default mongoose.models.message || mongoose.model("message", messageSchema);
