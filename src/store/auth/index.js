import Firebase from 'firebase/app'
import 'firebase/auth'

export default {
  namespaced: true,

  state: {
    user: {}
  },

  getters: {
    user (state) {
      return state.user
    },

    isAuthenticated (state) {
      return !!state.user
    }
  },

  mutations: {
    SET_USER (state, payload) {
      let user = payload
      state.user = user
    },

    RESET_USER (state) {
      state.user = null
    }
  },

  actions: {
    async signIn ({
      commit
    }, payload) {
      let email = payload.email
      let password = payload.password

      await Firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user)
        })
        .catch(error => {
          throw error
        })
    },

    async signUp ({
      commit
    }, payload) {
      let email = payload.email
      let password = payload.password
      let username = payload.username

      await Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          // Aggiorno il displayName
          user.user.updateProfile({
            displayName: username
          }).then(() => {
            console.log('Aggiornato displayName. procedo con la mail di verifica')
            return user.user.sendEmailVerification()
          }).then(() => {
            console.log('Fatto')
          }).catch(error => {
            throw error
          })

          commit('SET_USER', user)
        })
        .catch(error => {
          throw error
        })
    },

    async recoveryPassword ({
      commit
    }, payload) {
      let email = payload.email

      await Firebase.auth().sendPasswordResetEmail(email)
        .then(user => {

        })
        .catch(error => {
          throw error
        })
    },

    async signOut ({
      commit
    }) {
      await Firebase.auth().signOut()
        .then(() => {
          commit('SET_USER', {})
        })
    }
  }
}
