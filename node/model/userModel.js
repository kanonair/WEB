const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: String,
        default: 'Y'
    }
})
module.exports = mongoose.model('users', userSchema)
