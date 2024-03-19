<template>
        <v-parallax
            class="image"
            height="750"
            src="@/assets/head_bg.jpg"
        >
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                 <h1 class="text-h4 font-weight-bold mb-4">Gutzkowclub e.V. - Dresdens ältester Studentenclub</h1>
                 <h4 class="subheading">Keine halben Sachen, nur halbe Liter!</h4>
            </div>
        </v-parallax>
</template>

<script setup>

</script>

<style>
    .image img {
        filter: brightness(50%);
    }
</style>