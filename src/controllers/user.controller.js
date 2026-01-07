import User from './../model/user.js';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'


const userController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const match = await User.findOne({ email });

        //checking for existing user
        if (match) {
            return res.status(409).json({
                message:'user already exist'
            })
        }

        //bcrypt password
        const salt = bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        //create a new user
        const newUser = new User({
            name: name,
            email: email,
            password: hashPassword
        })

        //save user to the database
        await newUser.save();

        //server response
        res.status(200).json({
            message:'user added successfully'
        })
    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            message:'server error'
        })
    }
}

export default userController;