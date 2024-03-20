<template>
  <v-app theme="dark">
    <v-app-bar>
      <Head/>
    </v-app-bar>
    <v-main class="content">
      <Parallax v-if="$route.meta.showParallax"/>
      <v-container>
        <v-row>
          <v-col cols="8" class="mt-10 mb-10">
            <h4 class="text-h4 mb-10" v-if="$route.meta.showTitle">{{ $route.name }}</h4>
            <router-view/>
          </v-col>
          <v-col cols="4" class="mt-10">
            <Sidebar/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Foot/>
  </v-app>
</template>

<script setup>
import Head from '@/components/HeadComponent.vue'
import Foot from '@/components/FootComponent.vue'
import Parallax from '@/components/ParallaxComponent.vue'
import Sidebar from './components/SidebarComponent.vue'
</script>

<style>
html {
  overflow-y: auto !important;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fafafa;
  max-width: 1700px;
  margin: auto;
}

#app-content {
  margin-top: 70px;
}

.v-application__wrap {
  min-height: 0 !important;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #3c3c3c;
}

::-webkit-scrollbar-thumb {
  background: #646464;
  border-radius: 5px 0 0 5px;
}

.content-link {
  color: #1976D2;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.content-link:hover {
  color: #12589a;
  transition: all 0.3s ease-in-out;
}
</style>
