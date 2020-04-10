<template>
  <q-page
    style="background: linear-gradient(#2c2c54, #706fd3);"
    class="row items-stretch justify-center items-center"
  >
    <div class="col-12 col-sm-8 col-md-6 col-lg-3">
      <div class="column justify-center full-height fit">

        <q-card
          square
          class="shadow-24 col-12 col-sm-auto"
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

              <p class="text-center text-body2">Inserisci la tua e-mail. Ti invieremo un link per reimpostare la password</p>

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

            </q-card-section>

            <!--Button-->
            <q-card-actions class="q-px-lg">
              <q-btn
                type="submit"
                unelevated
                size="lg"
                color="secondary"
                class="full-width text-white"
                label="Invia"
                :loading="busy"
              />
            </q-card-actions>
          </q-form>

          <!--Forgot password-->
          <q-card-section class="text-center">
            <q-btn
              no-caps
              flat
              @click="$router.push({ name: 'signIn'})"
              class="text-grey-6 text-body2 tetx-weight-regular"
            >Indietro
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
        email: ''
      },
      rules: {
        email: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
      }
    }
  },
  methods: {
    signIn () {
      if (this.$refs.form.validate()) {
        this.busy = true
        let credentials = {
          email: this.form.email
        }

        this.$store.dispatch('auth/recoveryPassword', credentials)
          .then(user => {
            this.$q.notify('E\' stata inviata un e-mail all\'indirizzo indicato, con la quale è possibile reimpostare la password.')

            this.busy = false

            this.$router.replace({ name: 'signIn' })
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
