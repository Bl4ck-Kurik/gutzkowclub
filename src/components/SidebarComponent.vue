<template>
  <v-container>
    <v-container class="sidebar-container">
      <v-row>
        <v-col cols="12">
          <div class="text-h5 py-4">Hier Findest du uns</div>
          <div class="text-h6">Adresse</div>
          <div class="text-subtitle-1 py-2">
            Gutzkowclub e.V.<br>
            Max-Kade-Haus<br>
            Gutzkowstr. 29-33<br>
            01069 Dresden
          </div>
          <div class="text-h6">Kontakt</div>
          <div class="text-subtitle-1 py-2">
            Telefon: 0351 4714221<br>
            Email: info@gutzkowclub.de
          </div>
          <div class="text-h6">Öffnungszeiten</div>
          <div class="text-subtitle-1 py-2">
            Montag bis Donnerstag 20:00-01:00<br>
            Freitag + Samstag 18:00-02:00 <br>
            (nur Vermietungen)
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="sidebar-container">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <a href="https://www.facebook.com/Gutzkow" target="_blank">
            <v-icon class="social-facebook" size="64">mdi-facebook</v-icon>
          </a>
          <div class="mt-3">
            Der Gutz auf Facebook
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="sidebar-container">
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <a href="https://www.instagram.com/gutzkowclub/" target="_blank">
            <v-icon class="social-instagram" size="64">mdi-instagram</v-icon>
          </a>
          <div class="mt-3">
            Der Gutz auf Instagram
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>

</script>

<style>
.sidebar-container {
  font-size: 18px;
  background-color: rgba(50, 50, 50, 0.3);
  padding: 30px;
  border-left: 4px solid #563e67;
  border-radius: 0 10px 10px 0;
  margin-bottom: 20px;
}
.social-facebook {
  color: #1877F2;
}
.social-instagram {
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
