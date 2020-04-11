<template>
  <q-layout>

    <q-page-container>
      <q-page
        style="background: linear-gradient(#2c2c54, #706fd3);"
        class="row items-stretch justify-center items-center"
      >
        <router-view />
      </q-page>
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
