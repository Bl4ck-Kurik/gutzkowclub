<template>
  <PictureComponent :images="images"></PictureComponent>
</template>

<script setup>
import PictureComponent from "@/components/PictureComponent.vue";

const images = [
  { src: '/src/assets/head_bg.jpg', cols: 12},
  { src: '/src/assets/pictures_1.jpg', cols: 4},
  { src: '/src/assets/pictures_2.jpg', cols: 4},
  { src: '/src/assets/pictures_3.jpg', cols: 4},
  { src: '/src/assets/pictures_4.jpg', cols: 12},
  { src: '/src/assets/pictures_5.jpg', cols: 4},
  { src: '/src/assets/pictures_6.jpg', cols: 4},
  { src: '/src/assets/pictures_7.jpg', cols: 4},
  { src: '/src/assets/pictures_8.jpg', cols: 12},
]
</script>

<style scoped>

</style>
