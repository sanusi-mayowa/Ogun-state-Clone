<template>
  <section class="emergency-hero-section">
    <div class="text-center emergency">
      <h2 class="text-capitalize">Ogun State Government Emergency Info</h2>
      <p class="mt-3">These are our network location around the state.</p>
    </div>
    <div class="emergency-department px-15 mt-16 pt-5">
      <v-row class="department-main">
        <v-col cols="12" md="4" sm="6" class="department-col">
          <v-card class="bg- py-7">
            <div class="text-center px-6">
              <p class="bg-primary py-3 department-title">Police Department</p>
            </div>
            <div class="department-details px-10 mt-10 text-center">
              <p>Ogun State Police Control Room</p>
              <p>emergency@ogunstate.gov.ng</p>
              <p>Emergency: Police Control</p>
              <p>Room:+2347042456789</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" class="department-col">
          <v-card class="bg-white py-7">
            <div class="text-center px-6">
              <p class="bg-primary py-3 department-title">Medical Center</p>
            </div>
            <div class="department-details px-10 mt-10 text-center">
              <p>Ogun State University Teaching Hospital</p>
              <p>info@osuth.ng</p>
              <p>Health Emergency</p>
              <p>Room:+2347042456789</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" class="department-col">
          <v-card class="bg-white py-7">
            <div class="text-center px-6">
              <p class="bg-primary py-3 department-title">State Government</p>
            </div>
            <div class="department-details px-10 mt-10 text-center">
              <p>Ogun state,Nigeria</p>
              <p>info@ogunstate.gov.ng</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" class="department-col">
          <v-card class="bg-white py-7">
            <div class="text-center px-6">
              <p class="bg-primary py-3 department-title">FIRE SERVICE</p>
            </div>
            <div class="department-details px-10 mt-10 text-center">
              <p>ONIKOKO</p>
              <span> 08035692904</span>
              <p>SAGAMU STATION</p>
              <span> 08065226846</span>
              <p>IJEMO STATION</p>
              <span>08035596945</span>
              <p>OTA STATION</p>
              <span>08032262208</span>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" class="department-col">
          <v-card class="bg-white py-7">
            <div class="text-center px-6">
              <p class="bg-primary py-3 department-title">PPRO</p>
            </div>
            <div class="department-details px-10 mt-10">
              <p class="text-center">09159578888</p>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" class="department-col">
          <v-card class="bg-white py-7">
            <div class="text-center px-6">
              <p class="bg-primary py-3 department-title">OTHER CONTROL ROOM</p>
            </div>
            <div class="department-details px-10 mt-10 text-center">
              <p>09062837609</p>
              <p>09120141706</p>
              <p>09151027369</p>
              <p>07084972994</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
<script>
export default {
  name: "EmergencyPage",
};
</script>
