const express = require('express');
// 创建路由对象
const router = express.Router();

// 导入路由处理函数模块
const userHandler = require('../router_handler/user');

// 登录
router.post('/login', userHandler.login);

// 将路由对象共享出去
module.exports = router;