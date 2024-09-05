import mongoose from "mongoose";

const URL = process.env.MONGO_URL;

console.log("MongoDB URL:", URL);

const connect = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error in connecting to DB:", err);
    }
};

export default connect;
