# chatroom-example

:punch:chatroom example, use react &amp; vue, powered by koa2.x with socket.io, build with webpack &amp; flowtype

## 环境搭建

> 数据库采用的是 redis+mysql 的方式  
> node环境为8.11.1  
> 本人开发环境为mac，安装软件通过`brew`来进行安装  
*后续可能会补上`windows`上边的安装方式*

### npm依赖的安装

> 会动态安装根目录及`client`、`server`目录下的各种依赖文件。

```bash
npm run init
```

以及因为使用`flow`，如果需要开发修改的话，需要全局安装如下插件：

```bash
npm i -g flow-typed
```

### redis 的安装

#### Mac

```bash
brew install redis
```

##### 启动&停止 redis 服务

```bash
brew services start redis # start redis
brew services stop  redis # stop  redis
```



然后我们通过以下命令来判断服务是否正常运行，如果得到`pong`则表示运行正常

```bash
redis-cli ping
```

### mysql的安装

```bash
brew install mysql
```

##### 启动&停止 mysql 服务

同样使用上边的`brew services`。  

```bash
brew services start mysql # start mysql
brew services stop  mysql # stop  mysql
```

> 通过`brew services list`可以查看当前所有的服务状态

##### 设置密码

```bash
mysqladmin -u root password 'yourpassword'
```

*为了密码的完整性，请不要省略`'`*

设置完成后通过进行登录数据库验证是否可用：  

```bash
mysql -u root -p # 然后输入密码
```

##### 如何修改密码

在登进去数据库的情况下：

###### 5.6及之前版本

```bash
mysql -u root -p
mysql> USE mysql;
mysql> UPDATE user SET password=PASSWORD("your new password") WHERE User='root';
mysql> FLUSH PRIVILEGES;
mysql> quit;
```

###### 5.7+版本

```bash
mysql -u root -p
mysql> USE mysql;
mysql> UPDATE mysql.user SET authentication_string=PASSWORD("your new password") WHERE User='root';
mysql> FLUSH PRIVILEGES;
mysql> quit;
```

*一定记得不要省略后边的`;`*
