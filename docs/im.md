## 关于IM结构的定义

### server

一些socket事件的定义

#### login
用户登录的通知，需要将用户添加至队列中
添加判断用户是否已经在队列中，如果是的话，需要将之前的踢下线
```javascript
{
  uid: '' // 用户ID
}
```

#### message

获取一条新的消息，`client`应该至少传递如下参数：
```javascript
{
  target: '', // 接收方
  from: '', // 发送方
  type: 1, // 消息类型
  content: '', // 聊天内容
  messageId: 1 // 消息ID，每个聊天室之间保证唯一即可
}
```

#### logout

某个用户退出聊天室，从队列中移除该用户
```javascript
{
  uid: '' // 用户ID
}
```

### client

对外暴露一个对象，`chatroom`，一个针对业务对`socket.io`的封装

#### login

登录并建立`socket`链接

```javascript
chatroom.login()
```

#### sendMessage 

用来向某个用户发送消息

```javascript
chatroom.sendMessage({
  target: '', // 用户ID
  content: '', // 聊天内容
  type: 1 // 消息类型 1: 普通文本 2: 图片消息
})
```

#### logout

退出登录

```javascript
chatroom.logout()
```

以上为所有的API接口，下边列出来的是可以监听的事件
----

#### message

收取到新的消息

```javascript
chatroom.message(function callback (messageInfo) {
  
})
```

`messageInfo`结构如下：
```javascript
{
  from: '', // 发送方
  type: 1, // 消息类型
  content: '', // 聊天内容
  timestamp: '', // 发送时间
}
```

#### error

错误监听，`err`有几种类型：
1. `ConnectionError` 连接错误，与服务端的连接断开
2. `MessageError` 发送消息失败
3. `LogoutError` 异地登陆
4. `default` 未知异常的处理

```javascript
chatroom.error(function callback (err) {
  switch (err.type) {
    case ErrorType.ConnectionError: console.error('连接错误') break
    case ErrorType.MessageError: console.error('发送消息失败', err.message, err.target, err.messageId) break
    case ErrorType.LogoutError: console.error('该账号在其他设备登录') break
    default: console.error('未知错误', err.message) break
  }
})
```