<template>
  <div>
    <b-button
      v-for="option in options"
      :key="option"
      class="mx-2"
      :variant="option == value ? 'success' : 'light'"
      @click="$emit('input', option)"
    >
      {{ option }}
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    value: String
  }
}
</script>
