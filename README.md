# chatroom-example

:punch:chatroom example, use react &amp; vue, powered by koa2.x with socket.io, build with webpack &amp; flowtype

## 环境搭建，数据库采用的是 redis+mysql 的方式

### redis 的安装

#### Mac

```bash
brew install redis
```

##### 启动 redis 服务

```bash
redis-server
```

_退出 terminal 后则为关闭服务_

然后我们通过以下命令来判断服务是否正常运行，如果得到`pong`则表示运行正常

```bash
redis-cli ping
```
