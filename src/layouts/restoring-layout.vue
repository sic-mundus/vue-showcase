<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <h1>Restoring...</h1>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LayoutRestoring',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' })
  },
  mounted () {
    console.log('mounted restoring: authenticated', this.isAuthenticated)
    if (this.isAuthenticated) {
      this.$router.replace('/app');
    } else {
      this.$router.replace('/auth')
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
