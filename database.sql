CREATE table `users` (
  `user_id` int NOT NULL AUTO_INCREMENT COMMENT 'id唯一字段',
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户密码',
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户邮箱\r\n',
  `user_pic` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '用户头像',
  `status` tinyint NOT NULL DEFAULT 0 COMMENT '用户状态： 0为停用、1启用\r\n',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;
​
SET FOREIGN_KEY_CHECKS = 1;