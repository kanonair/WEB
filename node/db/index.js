const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/test'

mongoose.set('useCreateIndex', true)
module.exports = new Promise((resolve, reject) => {
    mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
    mongoose.connection.on('open', err => err ? reject() : resolve())
})
