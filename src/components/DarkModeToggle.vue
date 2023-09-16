<template>
  <div>
    <v-btn @click="toggleDarkMode"> Toggle Dark Mode </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>
