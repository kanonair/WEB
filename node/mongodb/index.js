const db = require('./db')
const studentModel = require('./model/studentModel')

;(async () => {
    await db

    // 添加
    // const res = await studentModel.create({
    //     stu_id: 's002',
    //     stu_name: 'Air',
    //     stu_age: 18,
    //     stu_sex: '女',
    //     stu_hobby: ['sing', 'dance'],
    //     stu_info: 'very good'
    // })
    // console.log(res)

    // 查询
    // const res = await studentModel.find({stu_age: 18}, {stu_name: 1})
    // console.log(res)

    // 修改
    // const res = await studentModel.updateOne({stu_age: 18}, {stu_name: 'Taylor'})
    // console.log(res)

    // 删除
    const res = await studentModel.deleteOne({stu_age: 18})
    console.log(res)
})()
