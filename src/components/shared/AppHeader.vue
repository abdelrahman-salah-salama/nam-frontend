<template>
  <div class="headerSection">
    <v-container>
      <v-app-bar :elevation="2">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          class="d-flex d-sm-none"
        ></v-app-bar-nav-icon>
        <v-toolbar-title style="display: flex">
          <v-img
            src="../../assets/Logo.svg"
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
            <v-btn icon="mdi-chevron-down" color="white" v-bind="props">
            </v-btn>
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
    <v-container style="padding: 0px 2%; margin-top: -5%">
      <v-row class="goodEvening">
        <v-col sm="12" md="4" lg="6" cols="xs-12">
          <h1 class="headerFirstText">Good Evening, Shan</h1></v-col
        >
        <v-col sm="6" md="4" lg="3" cols="xs-12">
          <v-card class="newInvestigation" @click="openDialog">
            <v-card-text
              class="display: flex; flex-direction: column; align-items: center;"
            >
              <v-img
                class="text-center"
                src="../../assets/plus.png"
                height="35px"
              />
            </v-card-text>
            <h1>Add new Investigation</h1>
          </v-card>
        </v-col>
        <v-col sm="6" md="4" lg="3" cols="xs-12">
          <v-card class="importFile" @click="openDialog">
            <v-card-text>
              <v-img
                class="text-center"
                src="../../assets/upload.png"
                height="35px"
              />
            </v-card-text>
            <h1>Import from file</h1>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
        v-model="dialogVisible"
        class="newInvestigationDialog"
        max-width="700"
        :scrim="false"
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-card-title class="text-center Add-new-Investigation">
            Add new Investigation
          </v-card-title>
          <v-card-text>
            <div class="my-2">
              Fill the following form to add a new investigation
            </div>
            <div class="my-2">Investigation Name</div>
            <v-text-field
              density="compact"
              placeholder="Type the investigation name"
              variant="outlined"
              rounded
            ></v-text-field>
            <div class="my-2">
              Category <span style="color: grey">(Optional)</span>
            </div>

            <v-select
              label="Choose investigation category"
              rounded
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
            ></v-select>
          </v-card-text>
          <v-card-actions style="flex-direction: column">
            <v-btn
              class="mb-8 text-white text-capitalize"
              style="
                background-color: #5505a9;
                display: flex;
                align-items: center;
              "
              rounded
              variant="tonal"
            >
              Add new investigation
            </v-btn>

            <v-btn color="primary" @click="closeDialog">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
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
      isDarkMode: false,
      drawer: false,
      dialogVisible: false,
      tab: null,
      items: ["web", "shopping", "videos", "images", "news"],
      navigationItems: [
        { label: "Home", route: "/login" },
        { label: "About", route: "/login" },
        { label: "Contact", route: "/login" },
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
.headerSection {
  background: rgba(203, 135, 255, 0.08);
}

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

.goodEvening {
  margin: 8% 0;
}
.v-theme--light .headerFirstText {
  color: black;
}
.headerFirstText {
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.15px;
  text-align: left;
  color: #fff;
}
.newInvestigation {
  padding: 16px 40px;
  border-radius: 24px;
  border: solid 1px #aff;
  background-color: rgba(150, 240, 240, 0.08);
}
.newInvestigation h1 {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.22;
  letter-spacing: 0.43px;
  text-align: center;
  color: #aff;
}
.importFile {
  padding: 16px 48px;
  border-radius: 24px;
  border: solid 1px #cb87ff;
  color: #cb87ff;
  background: transparent;
}
.importFile h1 {
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.22;
  letter-spacing: 0.43px;
  text-align: center;
}
nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.Add-new-Investigation {
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.15px;
  text-align: left;
  color: #cb87ff;
  /* margin: 0 15px 68px 79px; */
}
.v-dialog > .v-overlay__content > .v-card,
.v-dialog > .v-overlay__content > form > .v-card {
  display: flex;
  flex-direction: column;
  padding: 12%;
  border: 1px solid rgba(203, 135, 255, 0.16);
  border-radius: 6%;
  box-shadow: 0 2px 24px 0 rgba(203, 135, 255, 0.24);
  background: #0f1622;
}
@media screen and (max-width: 600px) {
  .menuItems,
  .v-spacer {
    display: none;
  }
}
</style>
