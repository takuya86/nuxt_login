<template>
  <div class="header--wrapper">
    <header>
      <div class="header--inner">
        <LinkButton :link="`/`" :text="'TOP'" />
        <LinkButton :link="`/auth/signup`" :text="'新規登録'" />
        <LinkButton :link="`/auth/signin`" :text="'ログイン'" />
        <a class="logout-btn" @click="logout">ログアウト</a>
      </div>
    </header>
  </div>
</template>

<script>
import LinkButton from '~/components/Atoms/Button/LinkButton.vue'
import SubmitButton from '~/components/Atoms/Button/SubmitButton.vue'

export default {
  components: {
    LinkButton,
    SubmitButton
  },
  data() {
    return {
      link: '',
      text: ''
    }
  },
  methods: {
    async logout({ commit }) {
      try {
        await this.$store.dispatch('logout')
      } catch (error) {
        this.error = error.response.data.errors
      }
    }
  }
}
</script>

<style  lang="scss" scoped>
.header--wrapper {
  height: 65px;
  margin-bottom: 20px;
}
.header--inner {
  width: 1000px;
  height: 65px;
  margin: 0 auto;
  display: flex;
  gap: 15px;
  justify-content: end;
  align-items: center;
}
.logout-btn {
  cursor: pointer;
}
</style>
