<template>
  <button type="submit" class="submit-btn" @click="handleClick">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    methodName: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click-event', this.methodName)
    }
  }
}
</script>

<style  lang="scss" scoped>
.submit-btn {
  width: 100px;
  font-size: 15px;
  margin: 0 auto;
}
</style>
