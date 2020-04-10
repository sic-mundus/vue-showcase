<template>
  <q-layout>

    <q-page-container>
      <div class="jumbo bg-primary"></div>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'LayoutAuth',
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
.q-layout {
  background-size: cover;
}

.jumbo {
  position: absolute;
  height: 50vh;
  width: 100%;
}
</style>
