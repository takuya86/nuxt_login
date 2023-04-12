<template>
  <div>
    <h2>ユーザー情報</h2>
    <div v-if="this.$auth.loggedIn">
      <h3>storeで保存した情報</h3>
      <div v-if="storeUser">
        <div>{{ storeUser.name_kana }}</div>
        <div>{{ storeUser.name }}</div>
        <div>{{ storeUser.email }}</div>
      </div>
      <h3>authで保存した情報</h3>
      <div v-if="authUser">
        <div>{{ authUser.name_kana }}</div>
        <div>{{ authUser.name }}</div>
        <div>{{ authUser.email }}</div>
      </div>
    </div>
    <div v-else>
      <h3>未ログイン</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeUser: this.$store.state.user,
      authUser: this.$store.state.auth.user
    }
  }
}
</script>
