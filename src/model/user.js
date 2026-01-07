import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 0,
            maxLength:15
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

module.exports = mongoose.model('User', userSchema);