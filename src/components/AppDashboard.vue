<template>
  <div class="headerDiv">
    <AppHeader />
    <!-- <v-row>
      <v-col><h1>Good Evening, Shan</h1></v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-card @click="openDialog">
              <v-card-text>
                <v-img src="../assets/plus.png" />
                <p class="text-h5 text--primary">Add new Investigation</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card @click="openDialog" class="mx-auto" max-width="344">
              <v-card-text>
                <v-icon>mdi-plus</v-icon>
                <p class="text-h5 text--primary">Add new Investigation</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog v-model="dialogVisible" max-width="400">
          <v-card>
            <v-card-title> Dialog Content </v-card-title>
            <v-card-text>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
import AppHeader from "./shared/AppHeader.vue";
export default {
  name: "AppDashboard",
  components: {
    AppHeader,
  },
  data() {
    return {
      // dialogVisible: false,
    };
  },
  methods: {
    // openDialog() {
    //   this.dialogVisible = true;
    // },
    // closeDialog() {
    //   this.dialogVisible = false;
    // },
  },
};
</script>
<style>
.headerDiv {
  background-color: #372e5200;
}
</style>
