// @flow

export default (router: any, config: Object, logger: any) => {
  router.get('/', async (context, next) => {
    await context.render('vue', {
      title: 'vue-chatroom'
    })
  })
}
