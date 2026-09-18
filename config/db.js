import mongoose, { connect }  from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("db is connected")

    }catch (err){
        console.log("error occured",err.message)
    }
}
export default connectDB; 