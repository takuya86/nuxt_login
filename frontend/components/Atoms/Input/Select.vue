<template>
  <div>
    <select :value="value" @input="$emit('input', $event.target.value)">
      <option value=" " disabled selected style="display:none;"
        >選択してください</option
      >
      <option value="">選択してください</option>
      <option
        v-for="option in options"
        :key="option.id"
        :value="option.text ? option.value : option.id"
      >
        <template v-if="option.text">
          {{ option.text }}
        </template>
        <template v-else-if="option.first_name && option.last_name">
          {{ option.last_name + option.first_name }}
        </template>
        <template v-else>
          {{ option.category }}
        </template>
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
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
