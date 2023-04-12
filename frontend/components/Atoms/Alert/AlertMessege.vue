<template>
  <div class="alert-messege">
    <div>{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.alert-messege {
  margin-bottom: 15px;
  padding: 4px 8px;
  font-size: 14px;
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
