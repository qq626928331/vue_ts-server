// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入并注册 cors 中间件
const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/user', userRouter)

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(9999, function () {
  console.log('api server running at http://127.0.0.1:9999')
})
