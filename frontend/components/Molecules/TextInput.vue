<template>
  <div class="form-row">
    <Label :label="label" />
    <Input
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import Input from '~/components/Atoms/Input/Input.vue'
import Label from '~/components/Atoms/Label/Label.vue'

export default {
  components: {
    Input,
    Label
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
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
.form-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  text-align: left;
  label {
    width: 120px;
  }
  input {
    width: 300px;
    height: 35px;
  }
}
</style>
