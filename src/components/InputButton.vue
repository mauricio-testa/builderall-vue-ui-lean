<template>
  <div>
    <b-button
      class="mx-2"
      v-for="option in options" :key="option"
      :variant="option == value ? 'success' : 'light'"
      @click="$emit('input', option)"
    >{{ option }}</b-button>
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
