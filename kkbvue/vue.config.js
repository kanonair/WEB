module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': []
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: false,
            theme: false
        }
    },
    configureWebpack: {
        devServer: {
            before(app) {
                app.get('/api/login', (req, res) => {
                    const {username, password} = req.query
                    if (username === 'kkb' && password === '123') {
                        res.json({code: 1, token: 'kkb'})
                    } else {
                        res.status(401).json({code: 0, message: '哎呀,粗错了'})
                    }
                })

                function auth(req, res, next) {
                    if (req.headers.token) {
                        next()
                    } else {
                        res.status(401).json({code: 0, message: '哎呀,粗错了'})
                    }
                }

                app.get('/api/userinfo', auth, (req, res) => {
                    res.json({code: 1, data: 'hello'})
                })
            }
        }
    }
}
