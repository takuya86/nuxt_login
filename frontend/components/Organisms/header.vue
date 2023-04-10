<template>
  <div class="header--wrapper">
    <header>
      <div class="header--inner">
        <LinkButton :link="`/auth/signup`" :text="'新規登録'" />
        <LinkButton :link="`/auth/signin`" :text="'ログイン'" />
      </div>
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

<style  lang="scss" scoped>
.header--wrapper {
  height: 65px;
  background: #ffffff;
  border-top: 2px solid #5465ac;
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
</style>
