module.exports = (router, config, logger) => {
  router.get('/', async (context, next) => {
    await context.render('react', {
      title: 'react-chatroom'
    })
  })
}
