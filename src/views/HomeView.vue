<template>
  <div class="home">
    <AppHeader />
  </div>
</template>

<script>
import AppHeader from "../components/shared/AppHeader.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: { AppHeader },
};
</script>
