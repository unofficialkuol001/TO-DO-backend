import express from 'express'
import connectDB from './src/config/database.js'
import {config} from 'dotenv'

const app = express();

//middlewares
config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`)
        })
        connectDB();
    } catch (error) {
        console.log('error', error);
    }
}

startServer();
