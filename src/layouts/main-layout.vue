<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Home Deliveries
        </q-toolbar-title>

        <q-space></q-space>
        <q-btn
          flat
          round
          dense
          icon="perm_identity"
          class="q-mr-xs"
          to="/app/profile"
        />

        <q-btn
          round
          flat
          icon="more_vert"
        >
          <q-menu auto-close>
            <q-list style="min-width: 150px">
              <q-item clickable>
                <q-item-section @click="signOut">Esci</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab
          icon="inbox"
          to="/app/orders"
          label="I tuoi ordini"
        />
        <q-route-tab
          icon="shopping_cart"
          to="/app/shop"
          label="Acquista"
        />
        <q-route-tab
          icon="map"
          to="/app/map"
          label="Mappa"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  components: {
  },

  data () {
    return {

    }
  },
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>
