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
