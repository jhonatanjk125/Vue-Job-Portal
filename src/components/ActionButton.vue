<template>
  <button v-bind:class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton', 
  props: {
          text: {type: String, 
            required: true,},
          type: {
            type: String,
            required: false,
            default: 'primary',
            validator(value) {
              return ['primary', 'secondary'].includes(value)
            },

          },
        },
  computed: {
    buttonClass () {
      return {
      [this.type]: true,
    }
    },
  },
}; 
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue border-0;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent  hover:bg-brand-blue-2 hover:text-white;
}
</style>