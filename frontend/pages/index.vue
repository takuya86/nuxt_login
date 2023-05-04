<template>
  <div class="container">
    <div class="main">
      <h1 class="title">
        nuxt認証機能
      </h1>
      <UserDatail />
    </div>
  </div>
</template>

<script>
import UserDatail from '~/components/Organisms/Auth/UserDatail.vue'

export default {
  components: {
    UserDatail
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  /* background: #e5e5e5; */
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.main {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}
</style>
