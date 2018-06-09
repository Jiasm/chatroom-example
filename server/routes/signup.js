// @flow

export default (router: any, config: Object, logger: any) => {
  router.get('/', async (context, next) => {
    await context.render('react', {
      title: 'react-chatroom'
    })
  })

  router.post('/', async (context, next) => {
    let { account, password } = context.request.body

    if (!account || !password)
      return (context.body = {
        code: 401
      })

    context.body = {
      code: 200
    }
  })
}
