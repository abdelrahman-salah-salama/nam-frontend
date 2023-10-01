<template>
  <v-card
    class="appForm mx-auto pa-12 pb-8 elevation-0"
    style="width: -webkit-fill-available"
    max-width="830px"
  >
    <v-row>
      <v-col>
        <v-img class="my-6" max-width="228" src="../assets/Logo.svg"></v-img>
      </v-col>
      <v-col>
        <DarkModeToggle />
      </v-col>
    </v-row>
    <h1 style="font-size: 80px">Hi There!</h1>
    <p>Welcome to <span style="color: #cb87ff">NAM.</span> Community</p>
    <h2 style="margin: 5% 0 10% 0">Login to your account</h2>
    <div>Your UserName or Email Address</div>
    <v-text-field
      density="compact"
      placeholder="type your userName or email Address"
      variant="outlined"
      rounded
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password
    </div>

    <v-text-field
      :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      variant="outlined"
      @click:append-inner="visible = !visible"
      rounded
    ></v-text-field>
    <div class="text-end" style="margin-bottom: 12%">
      <a
        class="text-caption text-decoration-none text-blue"
        href="#"
        rel="noopener noreferrer"
        target="_blank"
        style="color: #cb87ff !important"
      >
        Forgot password?</a
      >
    </div>
    <div class="text-center">
      <v-btn
        class="mb-8 text-white text-capitalize"
        style="background-color: #5505a9; width: 30%"
        rounded
        variant="tonal"
      >
        Login
      </v-btn>
    </div>

    <div class="text-center">
      You Don't have an account?
      <a target="_blank" href="#" v-bind="props" @click.stop>
        Create a new account
      </a>
    </div>
  </v-card>
</template>

<script>
import DarkModeToggle from "./shared/DarkModeToggle.vue";

export default {
  components: {
    DarkModeToggle,
  },
  data: () => ({
    visible: false,
  }),
};
</script>

<style scoped>
.appForm {
  /* background-color: #15202b00; */
}
</style>
