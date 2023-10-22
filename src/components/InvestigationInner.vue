<template>
  <div class="headerSection">
    <AppHeader />
    <v-container style="padding: 0px 2%; margin-top: -5%">
      <v-row class="goodEvening">
        <v-col sm="12" md="4" lg="6" cols="xs-12">
          <h1 class="headerFirstText">Good Evening, Shan</h1></v-col
        >
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
  <v-container style="padding: 0 2%; margin-top: 1%">
    <v-row justify="space-between" align="center">
      <v-col cols="xs-12" style="display: flex; justify-content: flex-end">
        <v-text-field
          class="searchField"
          label="What You are searching for?"
          outlined
          single-line
          hide-details
          variant="none"
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="invest">
      <a href="/newBoard">
        <v-card class="newInvestigation">
          <v-card-text
            class="display: flex; flex-direction: column; align-items: center;"
          >
            <v-img class="text-center" src="../assets/plus.png" height="35px" />
          </v-card-text>
          <h1>Add new board</h1>
        </v-card>
      </a>
    </v-row>
  </v-container>
</template>

<script>
import AppHeader from "./shared/AppHeader.vue";

export default {
  name: "InvestigationInner",

  components: {
    AppHeader,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    // openDialog() {
    //   this.dialogVisible = true;
    // },
  },
};
</script>
<style>
.headerSection {
  background: rgba(203, 135, 255, 0.08);
}
/* Start Header */
.goodEvening {
  margin: 8% 0 0 0;
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
/* End Header */

.searchField {
  max-width: 464px;
  border-radius: 24px;
  border: solid 1px rgba(203, 135, 255, 0.89);
  background-color: rgba(203, 135, 255, 0.08);
}
.invest {
  background: url("../assets/Files.png") no-repeat center center !important;
  height: 620px;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 3%;
}
.newInvestigation {
  width: 242px;
  padding: 16px 48px;
  border-radius: 24px;
  border: solid 1px #aff;
  background-color: rgba(150, 240, 240, 0.08);
}
</style>
