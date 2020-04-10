<template>
  <q-page
    style="background: linear-gradient(#2c2c54, #706fd3);"
    class="row items-stretch justify-center items-center"
  >
    <div class="col-12 col-sm-8 col-md-6 col-lg-3">
      <div class="column justify-center full-height fit">

        <q-card
          square
          class="shadow-24 col-12 col-sm-7 col-md-7"
        >
          <q-card-section class="bg-primary">
            <h4 class="text-h5 text-white q-my-md">Home Deliveries</h4>

          </q-card-section>

          <q-form
            ref="form"
            class="q-px-sm q-pt-xl"
            @submit="signIn"
          >
            <q-card-section>

              <q-input
                square
                :rules="rules.email"
                v-model="form.email"
                type="email"
                label="Email"
                autocomplete="email"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                square
                :rules="rules.username"
                v-model="form.username"
                type="text"
                label="Username"
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account" />
                </template>
              </q-input>

              <q-input
                square
                :rules="rules.password"
                v-model="form.password"
                type="password"
                label="Password"
                autocomplete="new-password"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>

            </q-card-section>

            <!--Socials-->
            <q-card-section v-if="false">
              <div class="text-center q-pa-md q-gutter-md">
                <q-btn
                  round
                  color="indigo-7"
                >
                  <q-icon
                    name="fab fa-facebook-f"
                    size="1.2rem"
                  />
                </q-btn>
                <q-btn
                  round
                  color="red-8"
                >
                  <q-icon
                    name="fab fa-google-plus-g"
                    size="1.2rem"
                  />
                </q-btn>
                <q-btn
                  round
                  color="light-blue-5"
                >
                  <q-icon
                    name="fab fa-twitter"
                    size="1.2rem"
                  />
                </q-btn>
              </div>
            </q-card-section>

            <!--Button-->
            <q-card-actions class="q-px-lg">
              <q-btn
                type="submit"
                unelevated
                size="lg"
                color="secondary"
                class="full-width text-white"
                label="Join"
                :loading="busy"
              />
            </q-card-actions>
          </q-form>

          <!--Sign in instead-->
          <q-card-section class="text-center">
            <q-btn
              no-caps
              flat
              @click="$router.push({ name: 'signIn'})"
              class="text-grey-6 text-body2 tetx-weight-regular"
            >Hai già un account? Accedi!
            </q-btn>
          </q-card-section>
        </q-card>

      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      busy: false,
      form: {
        email: '',
        username: '',
        password: ''
      },
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        username: [
          v => !!v || 'Username is required',
          v =>
            v.length >= 6 ||
            'Username must be greater than 6 characters'
        ],
        password: [
          v => !!v || 'Password is required',
          v =>
            v.length >= 6 ||
            'Password must be greater than 6 characters'
        ]
      }
    }
  },
  methods: {
    signIn () {
      if (this.$refs.form.validate()) {
        this.busy = true
        let credentials = {
          email: this.form.email,
          password: this.form.password,
          username: this.form.username
        }

        this.$store.dispatch('auth/signUp', credentials)
          .then(user => {
            // console.log('da page: ', this.$router)
            // this.$router.replace({ name: 'shop' }).catch(() => { })
            this.busy = false
          })
          .catch(error => {
            this.$q.notify({
              icon: 'announcement',
              message: error.message
            })
            console.error(`Not signed in: ${error.message}`)

            this.busy = false
          })
      }
    }
  }
}
</script>

<style>
</style>
