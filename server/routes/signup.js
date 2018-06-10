// @flow
import { createAccount, login } from '../data/account'

export default (router: any, config: Object, logger: any) => {
  router.get('/', async (context, next) => {
    await context.render('react', {
      title: 'react-chatroom'
    })
  })

  router.post('/', async (context, next) => {
    let {
      account,
      password,
      name,
      avatar
    }: CreateAccount = context.request.body

    if (!account || !password || !name || !avatar) {
      return (context.body = {
        code: 401
      })
    }

    // try to login
    let id: string | null = await login({
      account,
      password
    })

    // new account
    if (id === null) {
      let id: string = await createAccount({
        account,
        password,
        name,
        avatar
      })
      context.body = {
        code: 200,
        id
      }
    } else {
      // already signup
      return (context.body = {
        code: 403
      })
    }
  })
}
