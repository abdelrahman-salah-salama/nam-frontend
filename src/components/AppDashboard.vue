<template>
  <div class="headerSection">
    <AppHeader />
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
                src="../assets/plus.png"
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
                src="../assets/upload.png"
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
  <v-container style="padding: 0 2%; margin-top: 1%">
    <v-row justify="space-between" align="center">
      <v-col cols="xs-12">
        <h2 class="investigations">Created Investigations</h2>
      </v-col>
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
    <v-row m-auto>
      <v-col sm="6" md="4" lg="3" cols="xs-12">
        <v-card class="mx-auto text-start cardComponent p-0">
          <v-card-item>
            <v-card-title class="">Security shell guide </v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="text-grey me-1">14 Jul 2023</div>
          </v-card-text>

          <v-card-actions style="padding: 0 0.8rem">
            <v-btn
              class="text-white text-capitalize"
              style="background-color: rgba(58, 137, 243, 0.45)"
              rounded
              variant="tonal"
            >
              Security
            </v-btn>
          </v-card-actions>
          <v-card-actions style="padding: 0 0.8rem">
            <span class="px-2">
              <v-img
                class=""
                src="../assets/upload.png"
                width="23px"
                height="21px
"
              ></v-img>
            </span>
            <span class="">
              <v-img
                class=""
                src="../assets/delete.png"
                width="18px"
                height="21px
"
              ></v-img>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col sm="6" md="4" lg="3" cols="xs-12">
        <v-card class="mx-auto text-start cardComponent p-0">
          <v-card-item>
            <v-card-title class="">Security shell guide </v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="text-grey me-1">14 Jul 2023</div>
          </v-card-text>

          <v-card-actions style="padding: 0 0.8rem">
            <v-btn
              class="text-white text-capitalize"
              style="background-color: rgba(58, 137, 243, 0.45)"
              rounded
              variant="tonal"
            >
              Security
            </v-btn>
          </v-card-actions>
          <v-card-actions style="padding: 0 0.8rem">
            <span class="px-2">
              <v-img
                class=""
                src="../assets/upload.png"
                width="23px"
                height="21px
"
              ></v-img>
            </span>
            <span class="">
              <v-img
                class=""
                src="../assets/delete.png"
                width="18px"
                height="21px
"
              ></v-img>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col sm="6" md="4" lg="3" cols="xs-12">
        <v-card class="mx-auto text-start cardComponent p-0">
          <v-card-item>
            <v-card-title class="">Security shell guide </v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="text-grey me-1">14 Jul 2023</div>
          </v-card-text>

          <v-card-actions style="padding: 0 0.8rem">
            <v-btn
              class="text-white text-capitalize"
              style="background-color: rgba(58, 137, 243, 0.45)"
              rounded
              variant="tonal"
            >
              Security
            </v-btn>
          </v-card-actions>
          <v-card-actions style="padding: 0 0.8rem">
            <span class="px-2">
              <v-img
                class=""
                src="../assets/upload.png"
                width="23px"
                height="21px
"
              ></v-img>
            </span>
            <span class="">
              <v-img
                class=""
                src="../assets/delete.png"
                width="18px"
                height="21px
"
              ></v-img>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col sm="6" md="4" lg="3" cols="xs-12">
        <v-card class="mx-auto text-start cardComponent p-0">
          <v-card-item>
            <v-card-title class="">Security shell guide </v-card-title>
          </v-card-item>

          <v-card-text>
            <div class="text-grey me-1">14 Jul 2023</div>
          </v-card-text>

          <v-card-actions style="padding: 0 0.8rem">
            <v-btn
              class="text-white text-capitalize"
              style="background-color: rgba(58, 137, 243, 0.45)"
              rounded
              variant="tonal"
              @click="changeMode"
            >
              Security
            </v-btn>
          </v-card-actions>
          <v-card-actions style="padding: 0 0.8rem">
            <span class="px-2">
              <v-img
                class=""
                src="../assets/upload.png"
                width="23px"
                height="21px
"
              ></v-img>
            </span>
            <span class="">
              <v-img
                class=""
                src="../assets/delete.png"
                width="18px"
                height="21px
"
              ></v-img>
            </span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
      dialogVisible: false,
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
/* End Header */

.cardComponent {
  /* width: 342px; */
  width: 100%;
  padding: 1%;
  border-radius: 16px;
  border: solid 1px rgba(203, 135, 255, 0.89);
  background-color: rgba(203, 135, 255, 0.16);
}
.investigations {
  width: 283px;
  height: 29px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.58px;
  color: #aff;
}
.searchField {
  max-width: 464px;
  border-radius: 24px;
  border: solid 1px rgba(203, 135, 255, 0.89);
  background-color: rgba(203, 135, 255, 0.08);
}
</style>
