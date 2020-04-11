<template>
    <div class="col-12 col-sm-8 col-md-6 col-lg-3">
      <div class="column justify-center full-height fit">

        <q-card
          square
          class="shadow-24 col-12 col-sm-auto"
        >
          <q-card-section class="bg-primary text-center">
            <h4 class="text-h5 text-white q-my-md">Home Deliveries</h4>
            <div
              class="absolute-bottom-right q-pr-md"
              style="transform: translateY(50%); z-index:10"
            >
              <q-btn
                @click="$router.replace({ name: 'signUp'})"
                fab
                class="shadow-4"
                icon="mdi-account-plus"
                color="accent"
              >
                <q-tooltip
                  content-class="bg-accent"
                  content-style="font-size: 16px"
                >
                  Registra un nuovo account
                </q-tooltip>
              </q-btn>
            </div>
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
                <template v-slot:before>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input
                square
                :rules="rules.password"
                v-model="form.password"
                type="password"
                label="Password"
                autocomplete="current-password"
              >
                <template v-slot:before>
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
                color="accent"
                class="full-width text-white"
                label="Accedi"
                :loading="busy"
              />
            </q-card-actions>
          </q-form>

          <!--Forgot password-->
          <q-card-section class="text-center">
            <q-btn
              no-caps
              flat
              @click="$router.push({ name: 'forgotPassword'})"
              class="text-grey-6 text-body2 tetx-weight-regular"
            >Hai dimenticato la password?
            </q-btn>
          </q-card-section>
        </q-card>

      </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      busy: false,
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
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
          password: this.form.password
        }

        this.$store.dispatch('auth/signIn', credentials)
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
