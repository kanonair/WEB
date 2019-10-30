const {Router} = require('express')
const userModel = require('../model/userModel')

const router = Router()

router.post('/login', async (req, res) => {
    const {
        email,
        password
    } = req.body
    const user = await userModel.findOne({email, password})
    if (user) {
        res.send('登陆成功')
    } else {
        res.send('登陆失败')
    }
})

router.post('/register', async (req, res) => {
    const {
        email,
        nickname,
        password
    } = req.body
    const user = await userModel.findOne({email})
    if (!user) {
        await userModel.create({email, nickname, password})
        res.send('注册成功')
    } else {
        res.send('邮箱已被注册')
    }
})

module.exports = router
