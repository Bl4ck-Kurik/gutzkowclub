const verMajor = 1;
const verMinor = 0;
const now = new Date();
const padTwo = (val) => (val > 9 ? "" : "0") + val;
const nowMonth = now.getMonth() + 1;
const nowDay = now.getDate();
const verBuildDate = now.getFullYear() + padTwo(nowMonth) + padTwo(nowDay);
const verBuildTime = padTwo(now.getHours()) + padTwo(now.getMinutes()) + padTwo(now.getSeconds());
import.meta.env.VUE_APP_VERSION = `${verMajor}.${verMinor}.${verBuildDate}.${verBuildTime}`;

console.log(`Building version: ${import.meta.env.VUE_APP_VERSION}`);



/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'

const app = createApp(App)

registerPlugins(app)

app.use(plugin, defaultConfig).mount('#app')
