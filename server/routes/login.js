// @flow
import { getAccount, login } from '../data/account'

export default (router: any, config: Object, logger: any) => {
  router.get('/', async (context, next) => {
    await context.render('react', {
      title: 'react-chatroom'
    })
  })

  router.post('/', async (context, next) => {
    let { account, password } = context.request.body

    if (!account || !password) {
      return (context.body = {
        code: 401
      })
    }

    let id: string | null = await login({ account, password })

    if (id === null) {
      return (context.body = {
        code: 403
      })
    } else {
      let accountInfo: AccountInfo = await getAccount({ id })
      return (context.body = {
        code: 200,
        ...accountInfo
      })
    }
  })
}
