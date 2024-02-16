import mongoose from "mongoose"; 

mongoose.connect("mongodb+srv://Samarth:Samarth@cluster0.4atjhyd.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("Connection of DB succesful")
}).catch((err)=>console.log(err));
