const express = require('express')
const db = require('./db')
const userRouter = require('./router/userRouter')

const app = express()

;(async () => {
    await db
    app.use(express.urlencoded({extended: true}))
    app.use(express.static('public'))
    app.use(userRouter)
})()

app.listen(3000)
