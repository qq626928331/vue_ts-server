const Sequelize = require("sequelize");
// 建立连接
const sequelize = new Sequelize(
  // 以下内容根据自身修改
  "vue_ts-database", // 数据库名
  "root", // 连接用户名
  "950830", // 密码
  {
    dialect: "mysql", // 数据库类型
    host: "127.0.0.1", // ip
    port: 3307, // 端口
    define: {
      timestamps: false, // 不自动创建时间
    },
    timezone: "+08:00", // 东八时区
  }
);
// 测试连接是否成功
sequelize
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.error("数据库连接失败：", err);
  });
module.exports = sequelize;
