<template>
  <v-container>
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="display: flex">
        <a href="/">
          <v-img
            src="../../assets/Logo.svg"
            alt="logo"
            style="margin-right: 8px; width: 200px"
          />
        </a>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="p-0 m-0 menuItems">
        <v-btn text v-for="(item, index) in navigationItems" :key="index">
          <router-link :to="item.route">{{ item.label }}</router-link>
        </v-btn>
      </div>
      <DarkModeToggle />
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-avatar>
              <v-img src="../../assets/user-avatar.png"> </v-img>
            </v-avatar>
          </v-btn>
        </template>
        <span>Profile</span>
      </v-tooltip>
      <v-menu>
        <template v-slot:activator="{ props }">
          <span> Shan Kali </span>
          <v-btn icon="mdi-chevron-down" color="white" v-bind="props"> </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- end dropdown menu -->
    </v-app-bar>

    <!-- Add a navigation bar -->
    <v-navigation-drawer app v-model="drawer" absolute temporary>
      <!-- Use v-for to generate list items dynamically -->
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="(item, index) in navigationItems" :key="index">
            <router-link :to="item.route" class="v-list-item__content">
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- Navigation bar ends -->
  </v-container>
</template>
<script>
import DarkModeToggle from "./DarkModeToggle.vue";

export default {
  name: "AppHeader",
  components: {
    DarkModeToggle,
  },

  data() {
    return {
      drawer: false,
      dialogVisible: false,
      tab: null,
      items: ["web", "shopping", "videos", "images", "news"],
      navigationItems: [
        { label: "Dashboard", route: "/" },
        { label: "Investigation", route: "/investigationInner" },
        // { label: "Contact", route: "/login" },
        // Add more navigation items as needed
      ],
      lightThemeLogo: "../../assets/LogoLight.svg",
      darkThemeLogo: "../../assets/Logo.svg",
    };
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style>
.v-toolbar {
  border-radius: 10px;
}
.v-app-bar.v-toolbar {
  background: rgba(203, 135, 255, 0.08);
  position: inherit !important;
}
.v-toolbar a {
  text-decoration: none;
  text-transform: capitalize;
  color: #fff;
}
nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}
@media screen and (max-width: 600px) {
  .menuItems,
  .v-spacer {
    display: none;
  }
}
</style>
