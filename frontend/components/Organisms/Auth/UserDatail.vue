<template>
  <div>
    <h2>ユーザー情報</h2>
    <div>{{ this.$store.state }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.getCurrentUser()
  },
  methods: {
    async getCurrentUser() {
      try {
        console.log('実行されている')
        await this.$axios.get(`/users`)
        .then((res) => {
          this.user = res.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
