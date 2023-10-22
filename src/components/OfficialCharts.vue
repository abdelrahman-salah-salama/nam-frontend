<template>
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-flex"
    ></v-app-bar-nav-icon>
    <v-toolbar-title style="display: flex">
      <v-img
        src="../assets/Logo.svg"
        alt="logo"
        style="margin-right: 8px; width: 200px"
      />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="p-0 m-0 menuItems">
      <v-btn text v-for="(item, index) in navigationItems" :key="index">
        <router-link :to="item.route">{{ item.label }}</router-link>
      </v-btn>
    </div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-avatar>
            <v-img src="../assets/user-avatar.png"> </v-img>
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
    <v-app-bar-nav-icon
      @click="drawerChart = !drawerChart"
      class="d-flex"
    ></v-app-bar-nav-icon>
  </v-app-bar>
  <v-navigation-drawer app v-model="drawer" absolute temporary>
  </v-navigation-drawer>
  <v-navigation-drawer
    app
    v-model="drawerChart"
    absolute
    temporary
    location="right"
  >
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "OfficialCharts",

  data() {
    return {
      drawer: true,
      drawerChart: true,
    };
  },
  methods: {},
};
</script>
<style scoped></style>
