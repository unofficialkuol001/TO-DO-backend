import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const MONGO_URI = process.env.MONGO_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log('server error', error);
    }
}

export default connectDB;