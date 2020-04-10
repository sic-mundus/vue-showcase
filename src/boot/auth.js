// import Firebase from 'firebase/app'
import 'firebase/auth'

export default ({
  app,
  router,
  Vue,
  store
}) => {
  router.beforeEach((to, from, next) => {
    // Check to see if the route has the meta field "authRequired" set to true
    let authRequired = to.matched.some(route => route.meta.authRequired)

    let isAuthenticated = store.getters['auth/isAuthenticated'] // async () => await Firebase.auth().currentUser !== null

    if (authRequired) {
      if (isAuthenticated) {
        // User is already signed in. Continue on.

        if (from.query.redirect && !to.query.redirected) {
          console.log('redirecting to ', from.query.redirect)
          next({
            name: from.query.redirect,
            query: {
              redirected: true
            }
          })
        } else {
          console.log('=> granted')
          next()
        }
      } else {
        // Not signed in. Redirect to login page.
        console.log('=> passa per il via')
        next({
          name: 'signIn',
          query: {
            redirect: to.name
          }
        })
      }
    } else {
      // Doesn't require authentication. Just continue on.
      next()
    }
  })
}
