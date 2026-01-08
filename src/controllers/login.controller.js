import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import User from '../model/todo.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config();

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        //email validation
        if (!user) {
            return res.status(409).json({
                message:'Invalid credentials'
            })
        }

        //compare bcrypt password in the database
        const checkPassword = await bcrypt.compare(password, user.password);
        if (!checkPassword) {
            return res.status(401).json({
                message:'Invalid credentials'
            })
        }

        //create a jwt 
        const token = jwt.sign(
            { id: user._id, name: user.name },
            process.env.JWT_SECRET_KEY,
            {'expiresIn':'1h'}
        )

        //success message
        res.status(200).json({
            message:'login successful'
        })
    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            message:'server error'
        })
    }
}

export default login;