<template>
  <v-container class="pa-0">
    <v-row>
      <v-col class="home-content mb-5" cols="12">
        <div class="text-h5 mb-3">ACHTUNG!</div>
        <div class="text-body-1">
          Wir, der Gutz, ältester Studentenclub in Dresden, sind eine unverwüstliche Gemeinschaft aus Studenten, Nachteulen und Bierathleten. Auf ehrenamtlicher Basis versorgen wir Euch schon seit 1964 mit kühlem Bier und einer bunten Auswahl an Longdrinks, Cocktails und Spirituosen, und das zu unschlagbaren Preisen (der halbe Liter für stabile 2,20€)! Von Montag bis Donnerstag 20:00-01:00 Uhr sind wir für Euch da. Falls Ihr den Club am <strong>Wochenende mieten</strong> wollt, schreibt uns gerne unter <a class="content-link" href="#contact">Kontakt</a>.
        </div>
        <div class="text-body-1 my-3">
          Wir freuen uns auf Euch!
        </div>
      </v-col>
    </v-row>
  </v-container>
  <PictureComponent :images="[{ src: '/src/assets/welcome_image.jpg', cols: 12}]"></PictureComponent>
</template>

<script setup>
import PictureComponent from "@/components/PictureComponent.vue";
</script>

<style>

</style>
