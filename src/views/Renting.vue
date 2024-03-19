<template>
  <v-container class="mb-5">
    <v-row>
      <v-col class="pa-0" cols="12">
          <div class="text-h5 mb-3">Partyraum Mieten</div>
          <div class="text-body-1">
            <p>Den Gutz könnt ihr immer freitags oder samstags von 18:00-02:00 Uhr mieten!</p>
            <p>Alle im Gutz befindlichen Entertainmentmöglichkeiten können natürlich mitgenutzt werden, z.B. Musikanlage (Mischpult vorhanden), Darts, Bierpong, Karaoke usw.</p>
            <p>Natürlich könnt ihr auch Euren eigenen DJ mitbringen sowie den Gutz entsprechend eurer Feier dekorieren.</p>
            <div class="text-h5 my-3">Kosten für einen Abend:</div>
            <ul class="pl-4">
              <li>150€ für Studenten</li>
              <li>200€ für alle Anderen</li>
            </ul>
            <p>Zudem fallen 100€ Kaution an, die ihr im Normalfall natürlich wiederbekommt.</p>
            <p>Lust bekommen? Dann schreib uns gerne unter <a class="content-link" href="#contact">Kontakt</a></p>
          </div>
      </v-col>
    </v-row>
  </v-container>
  <Calendar />
</template>
<script setup>
import Calendar from '@/components/CalendarComponent.vue'
</script>
