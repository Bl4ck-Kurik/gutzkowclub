<template>
    <div class="menu">
        <v-tabs
            bg-color="primary"
        >
            <v-tab to="/">Wilkommen</v-tab>
            <v-tab to="/vermietung">Vermietung</v-tab>
            <v-tab to="/kontakt">Kontakt</v-tab>
            <v-tab to="#">Anfahrt</v-tab>
            <v-tab to="#">Bilder</v-tab>
            <v-tab to="#">Mitglied werden</v-tab>
        </v-tabs>
    </div>
</template>

<script setup>

</script>

<style>
    .menu {
        display: flex;
        flex-direction: column;
    }
    .menu .v-slide-group__content {
        width: 100vw;
        justify-content: center;
    }
</style>
