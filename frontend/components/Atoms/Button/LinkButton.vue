<template>
  <div class="link-btn">
    <nuxt-link :to="link">{{ text }}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style  lang="scss" scoped>
.link-btn {
  font-size: 15px;
  a {
    text-decoration: none;
    color: #000;
  }
}
</style>
