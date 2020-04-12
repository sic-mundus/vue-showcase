import Firebase from 'firebase/app'
import 'firebase/auth'

export default ({
  app,
  router,
  Vue,
  store
}) => {
  // Register the Firebase authentication listener
  Firebase.auth().onAuthStateChanged(user => {
    console.log('## onAuthStateChanged => ', user)

    if (user) {
      // Signed in. Let Vuex know.
      store.commit('auth/SET_USER', user)
      // The .catch ignore error if .replace is redirecting to dashboard and we
      // are already at that route.
      // https://github.com/vuejs/vue-router/issues/2881#issuecomment-520554378
      router.replace({
        name: 'shop'
      }).catch(() => {})
      new Vue(app) /* eslint-disable-line no-new */
    } else {
      // Signed out. Let Vuex know.
      store.commit('auth/RESET_USER')
      router.replace({
        name: 'challenge'
      }).catch(() => {})
      new Vue(app) /* eslint-disable-line no-new */
    }
  })
}
