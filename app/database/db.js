import mongoose from "mongoose";
const URL = process.env.MONGO_URL

console.log(URL)


const connect = async () =>{
    try{
        await mongoose.connect(URL)
        console.log("connected to db")

    }
    catch(err){
        console.log("error in connecting to db")
    }
}

export default connect