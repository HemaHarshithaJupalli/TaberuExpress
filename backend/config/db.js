import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://harshitha:Harshitha123@cluster0.4yujn.mongodb.net/food_delivery').then(()=>console.log("DB connected"));
}

