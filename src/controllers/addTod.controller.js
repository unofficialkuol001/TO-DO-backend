import mongoose from "mongoose";
import { User } from './../model/user.js'
import {Todo} from './../model/todo.js'

const addTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const existTitle = await Todo.findOne({ title });
        if (existTitle) {
            return res.status(409).json({
                message:'Task already exist'
            })
        }

        const newTask = new Todo({
            title: title,
            description: description
        })

        await newTask.save();
    } catch (error) {
        console.log('error', error);
        res.status(500).json({
            message:'server error'
        })
    }
}

export default addTodo;