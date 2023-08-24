import mongoose from 'mongoose';

export const connectDB = () =>{
    mongoose.set('strictQuery', true);
    const connection = mongoose.connect()
}