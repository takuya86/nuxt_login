<template>
  <div>
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
