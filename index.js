import express from 'express'
import connectDB from './src/config/database.js'
import { config } from 'dotenv'
import userRoutes from './src/routes/user.routes.js'
import todoRoutes from './src/routes/todo.routes.js'

const app = express();

//middlewares
config();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = process.env.PORT

app.use('todo/app', todoRoutes);
app.use('/authentication', userRoutes)

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
