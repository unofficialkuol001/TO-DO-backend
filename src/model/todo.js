import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String
        },
        dueDate: {
            type: Date
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;