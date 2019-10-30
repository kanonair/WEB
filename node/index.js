const express = require('express')
const db = require('./db')
const userRouter = require('./router/userRouter')
const uiRouter = require('./router/uiRouter')

const app = express()

;(async () => {
    await db
    app.set('view engine', 'ejs')
    app.set('views', './views')
    app.use(express.urlencoded({extended: true}))
    app.use(express.static('public'))
    app.use(userRouter)
    app.use(uiRouter)
})()

app.listen(3000)
