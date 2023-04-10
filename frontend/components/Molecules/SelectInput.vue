<template>
  <div class="form-row">
    <Label :label="label" />
    <Select :value="value" :options="options" @input="$emit('input', $event)" />
  </div>
</template>

<script>
import Label from '~/components/Atoms/Label/Label.vue'
import Select from '~/components/Atoms/Input/Select.vue'

export default {
  components: {
    Label,
    Select
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.form-row {
  display: flex;
  gap: 10px;
}
</style>
