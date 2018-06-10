/**
 * 账号相关的结构定义
 */

// 基础的账号结构
declare type Account = {
  account: string, // 账号
  password: string // 密码
}

// 账号信息
declare type AccountInfo = {
  name: string,
  avatar: string
}

// 唯一标识
declare type AccountId = {
  id: string
}

// 创建账号时的数据结构
declare type CreateAccount = Account & AccountInfo

// 更新账号信息的结构
declare type UpdateAccount = AccountId & {
  password?: string,
  name?: string,
  avatar?: string
}
