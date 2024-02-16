import mongoose from "mongoose";
const reportSchema=mongoose.Schema({
    email: String, 
    address:String,
    city:String,
    state:String,
    description:String,
    meterId:String
})

const reportModel=mongoose.model("report",reportSchema);
export default reportModel;