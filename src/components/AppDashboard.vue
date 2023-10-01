<template>
  <AppHeader />
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
