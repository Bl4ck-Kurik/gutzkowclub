<template>
  <v-footer class="footer pa-0 pt-3">
    <v-row class="footer-wrap ma-0">
      <v-row>
        <v-row class="icons pa-5">
          <v-btn icon class="social-icon" :href="facebookLink" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon class="social-icon" :href="instagramLink" target="_blank">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-row>
      </v-row>
      <v-row class="links w-100 ma-0 pa-5">
        <v-row class="links-inner mb-3">
          <v-col class="footer-link">
            <a href="#">Kontakt</a>
          </v-col>
          <v-col class="footer-link">
            <a href="#">Datenschutzerklärung</a>
          </v-col>
          <v-col class="footer-link">
            <a href="#">Impressum</a>
          </v-col>
        </v-row>
        <p>Copyright © 2024 Gutzkowclub e.V. - Dresdens ältester Studentenclub</p>
      </v-row>
    </v-row>
  </v-footer>
</template>

<script setup>

</script>

<style>
.footer-link a {
  text-decoration: none;
  color: unset;
}
.footer-link {
  transition: all 0.3s ease-in-out;
  margin: 0 40px;
}
.footer-wrap {
  display: flex;
  flex-direction: column;
}
.footer-link:hover {
  transition: all 0.3s ease-in-out;
  transform: scale(1.1);
}
.icons {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 !important;
}
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(50, 50, 50, 0.3);
}
.links-inner {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.social-icon {
  transition: all 0.3s ease-in-out;
  margin: 0 50px;
}

.social-icon:hover {
  transition: all 0.3s ease-in-out;
  transform: scale(1.2);
}
</style>
