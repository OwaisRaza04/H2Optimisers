import mongoose from "mongoose";
const userSchema=mongoose.Schema({
    fullName: String,
    email:String,
    mobileNumber:Number,
    meterId:String,
    password:String,
    isVerified:{
        type:Boolean,
        default:false
    }
})

const userModel=mongoose.model("user",userSchema);
export default userModel;