import mongoose from "mongoose";
import { Todo } from './../model/todo.js'


const getTodo = async (req, res) => {
    try {
        //get todos from database
        const todo = Todo.find();

        //send data to the frontend
        res.status(200).json({
            message: 'successful',
            todo
        })

    } catch (error) {
        console.log('error');
        res.status(500).json({
            message:'server error'
        })
    }
}

export default getTodo;
