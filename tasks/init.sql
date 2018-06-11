CREATE DATABASE chatroom_example;
USE chatroom_example;
CREATE TABLE `users` (
  `id` int (11) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `account` VARCHAR (64) NOT NULL COMMENT '账号',
  `password` VARCHAR (128) NOT NULL COMMENT '密码',
  `name` VARCHAR (16) NOT NULL COMMENT '用户昵称',
  `avatar` VARCHAR (256) NOT NULL COMMENT '用户头像',
  PRIMARY KEY (`id`)
);
