// @flow

/**
 * 创建账号
 * @param {string} account  账号
 * @param {string} password 密码
 * @param {string} name     昵称
 * @param {string} avatar   头像
 *
 * @return {string} 创建后的唯一标识
 */
export async function createAccount({
  account,
  password,
  name,
  avatar
}: CreateAccount): Promise<string> {
  return '123'
}

/**
 * 登录账号，获取唯一标识
 * @param {string} account   账号
 * @param {string} password  密码
 */
export async function login({
  account,
  password
}: Account): Promise<string | null> {
  return 'xxx'
}

/**
 * 更新账号信息
 * @param {string} id       唯一标识
 * @param {string} password 密码
 * @param {string} name     昵称
 * @param {string} avatar   头像
 *
 * @return {boolean} true: 修改成功 false: 修改失败
 */
export async function updateAccount({
  id,
  password,
  name,
  avatar
}: UpdateAccount): Promise<boolean> {
  return true
}

/**
 * 获取账号信息
 * @param {string} id   唯一标识
 *
 * @return {AccountInfo} 返回ID对应的账号信息
 */
export async function getAccount({ id }: AccountId): Promise<AccountInfo> {
  return {
    name: 'Niko Bellic',
    avatar: 'http://baidu.com'
  }
}
