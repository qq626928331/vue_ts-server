// 目的：为了保证 路由模块 的纯粹性，所有的 路由处理函数，必须抽离到对应的 路由处理函数模块 中
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 引入用户模型对象
// const e = require("express");
const UsersModel = require("../model/user");

// 登录的处理函数
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // 查询数据库用户表中是否存在指定用户名和密码的数据
  UsersModel.findOne({
    where: {
      username:username
    },
  })
    .then((result) => {
      if (!result) {
        /**
         * 返回体格式
         * code：0为失败，1为成功
         * message：返回的提示信息
         * data：返回的数据
         */
        return res.send({ code: 0, message: "用户不存在", data: null });
      } else {
        if (password !== result.password) {
          return res.send({ code: 0, message: "密码错误", data: null });
        } else {
          return res.send({ code: 1, message: "登录成功", data: result });
        }
      }
    })
    .catch((err) => {
      return res.send({ code: 0, message: "登录失败", data: err });
    });
};
