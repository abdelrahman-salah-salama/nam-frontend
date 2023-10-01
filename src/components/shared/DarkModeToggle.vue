<template>
  <v-switch
    inset
    color="info"
    v-model="darkMode"
    @change="toggleTheme()"
    style="display: flex; justify-content: flex-end"
  ></v-switch>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const darkMode = ref(true);

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? "dark" : "light";
};
</script>
