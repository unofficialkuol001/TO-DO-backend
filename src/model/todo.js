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
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'],
            default: 'pending'
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

module.exports = mongoose.model('Todo', todoSchema);