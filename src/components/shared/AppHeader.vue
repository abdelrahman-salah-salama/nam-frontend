<template>
  <v-row class="navbarDiv">
    <v-container>
      <v-toolbar class="">
        <v-col
          ><v-toolbar-title>
            <v-img
              class="my-6"
              max-width="228"
              src="../../assets/Logo.svg"
            ></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer
        ></v-col>
        <v-col>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn text><router-link to="/login">Login</router-link></v-btn>
            <v-btn text
              ><router-link to="/register">Register </router-link></v-btn
            >
          </v-toolbar-items>
          <div class="hidden-sm-and-up">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
              </template>
              <v-list class="responsiveMenu">
                <v-list-item>
                  <v-list-item-title
                    ><router-link to="/login"
                      >Login</router-link
                    ></v-list-item-title
                  >
                </v-list-item>
                <v-list-item>
                  <v-list-item-title
                    ><router-link to="/register"
                      >Register</router-link
                    ></v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
        <v-col>
          <DarkModeToggle />
        </v-col>
      </v-toolbar>
    </v-container>
  </v-row>
</template>

<script>
import DarkModeToggle from "./DarkModeToggle.vue";

export default {
  name: "AppHeader",
  components: {
    DarkModeToggle,
  },
  data: () => ({}),
  methods: {
    navigateToProfile() {
      // Implement navigation to the profile page
    },
    navigateToSettings() {
      // Implement navigation to the settings page
    },
    logout() {
      // Implement logout functionality
    },
  },
};
</script>
<style>
.navbarDiv {
  margin: 2% 4%;
}
.v-toolbar {
  background-color: rgba(203, 135, 255, 0.08);
}
</style>
