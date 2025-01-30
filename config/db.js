import mongoose from "mongoose";


 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ahamed:khalid@cluster0.ddnqc.mongodb.net/Food').then(()=>console.log("Database connected")); 
}