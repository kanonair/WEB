    模块化
    
        function (exports, require, module, __filename, __dirname) {
            console.log(arguments.callee.toString())
        }
        
        console.log(arguments.callee.toString()) // 输出函数本身
    
    包管理器
    
        npm i jquery [-g]
        
        npm remove jquery
    
    Buffer模块
    
        const buffer = Buffer.from('hello')
        console.log(buffer)
        
        const buffer1 = Buffer.alloc(10)
        console.log(buffer1)
        
        const buffer2 = Buffer.allocUnsafe(10)
        console.log(buffer2)
    
    fs模块

        fs.readFile(
            path.join(__dirname, 'file.txt'),
            (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    fs.writeFile(
                        path.join(__dirname, 'copy.txt'),
                        data,
                        err1 => err1 && console.log(err1)
                    )
                }
            }
        )
        
        const writeStream = fs.createWriteStream(path.join(__dirname, 'copy.txt'))
        const readStream = fs.createReadStream(path.join(__dirname, 'file.txt'))
        readStream.on('data', data => {
            writeStream.write(data)
        })
        readStream.on('close', () => writeStream.close())
    
    mongoDB
    
        https://www.mongodb.com/download-center/community
        
        db.collection.insertOne
        db.collection.insertMany
        db.collection.find
        db.collection.updateOne
        db.collection.updateMany
        db.collection.remove
        
    mongoose
    
        *uniq[数组去重排序]
    
    node服务器
    
        const http = require('http')
        const querystring = require('querystring')
        
        http.createServer((req, res) => {
            console.log(querystring.parse(req.url.split('?')[1]))
            res.setHeader('content-type', 'text/html;charset=utf-8')
            res.end('你好')
        }).listen(
            3000,
            error => !error && console.log('listening 3000'))
    
    express
    
        *fehelper[Chrome插件] https://github.com/zxlie/FeHelper
