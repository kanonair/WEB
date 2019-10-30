const mongoose = require('mongoose')

const Schema = mongoose.Schema
const studentSchema = new Schema({
    stu_id: {
        type: String,
        required: true,
        unique: true
    },
    stu_name: {
        type: String,
        required: true
    },
    stu_age: {
        type: Number,
        required: true
    },
    stu_sex: {
        type: String,
        required: true
    },
    stu_hobby: [String],
    stu_info: {
        type: Schema.Types.Mixed//所有类型
    },
    stu_date: {
        type: Date,
        default: Date.now()
    },
    stu_state: {
        type: String,
        default: 'Y'
    }
})
module.exports = mongoose.model('students', studentSchema)
