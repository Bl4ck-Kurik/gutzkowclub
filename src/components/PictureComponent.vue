<template>
  <v-container class="pictures pa-0">
    <v-row>
      <v-col :cols="image.cols" v-for="(image ,index) in images" :key="index">
        <v-img :src="image.src"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
    validator: (images) => images.every(image => 'src' in image && 'cols' in image)
  }
})
</script>

<style scoped>

</style>
