<template>
  <div class="header--wrapper">
    <header>
      <LinkButton :link="`/auth/signup`" :text="'新規登録'" />
      <LinkButton :link="`/auth/signin`" :text="'ログイン'" />
    </header>
  </div>
</template>

<script>
import LinkButton from '~/components/Atoms/Button/LinkButton.vue'

export default {
  components: {
    LinkButton
  },
  data() {
    return {
      link: '',
      新規登録text: ''
    }
  }
}
</script>

<style>
.header--wrapper {
  height: 65px;
  background: #ffffff;
  border-top: 2px solid #5465ac;
}
</style>
