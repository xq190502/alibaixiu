//开启服务器
const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const userRouter = require('./router/userRouter.js')

//配置静态文件
app.use('/assets',express.static('./assets'))
app.use('/static/uploads',express.static('./uploads'))

//配置ejs模板引擎
app.set('views','./views')
//设置模板引擎的静态页面
app.set('view engine','ejs')

//设置渲染模板使用的引擎  配置body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//注册路由中间件
app.use(usersRouter)

app.listen(3000,function(){
    console.log('running');
})