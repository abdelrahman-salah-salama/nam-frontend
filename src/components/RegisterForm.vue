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
    <h2 style="margin: 5% 0">Create A New Account</h2>
    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      UserName
    </div>
    <v-text-field
      density="compact"
      placeholder="type your userName"
      variant="outlined"
      rounded
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Email Address
    </div>
    <v-text-field
      density="compact"
      placeholder="type your email Address"
      variant="outlined"
      rounded
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Your Password
    </div>
    <v-text-field
      :append-inner-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visiblePassword ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      variant="outlined"
      @click:append-inner="visiblePassword = !visiblePassword"
      rounded
    ></v-text-field>
    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Confirm Password
    </div>
    <v-text-field
      :append-inner-icon="visibleConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
      :type="visibleConfirmPassword ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      variant="outlined"
      @click:append-inner="visibleConfirmPassword = !visibleConfirmPassword"
      rounded
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Refer ID
    </div>
    <v-text-field
      density="compact"
      placeholder="Enter Your Refer Id"
      variant="outlined"
      rounded
    ></v-text-field>

    <v-checkbox v-model="checkbox">
      <template v-slot:label>
        <div>
          Check to agree on the
          <a target="_blank" href="#" v-bind="props" @click.stop> Terms </a>
          and
          <a target="_blank" href="#" v-bind="props" @click.stop> Policy </a>
        </div>
      </template>
    </v-checkbox>
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
    visiblePassword: false,
    visibleConfirmPassword: false,
    checkbox: false,
  }),
};
</script>
<style scoped>
.appForm {
  background-color: #15202b00;
}
</style>
