module.exports = (router, config, logger) => {
  router.get('/', async (context, next) => {
    await context.render('vue', {
      title: 'vue-chatroom'
    })
  })
}
