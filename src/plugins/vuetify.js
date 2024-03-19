/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        colors: {
          background: '#121212',  // A dark shade for the background
          surface: '#1E1E1E',     // A slightly lighter shade than background for surfaces
          primary: '#563e67',     // A lighter variant of the light theme's primary color
          'primary-darken-1': '#536DFE',  // A slightly darker variant of the primary color
          secondary: '#7353BA',   // A lighter variant of the light theme's secondary color
          'secondary-darken-1': '#4DB6AC',  // A darker variant of the secondary color
          error: '#FF5252',       // A bright color for errors to stand out
          info: '#64B5F6',        // A bright color for information messages
          success: '#81C784',     // A success color that stands out on a dark background
          warning: '#FFD54F',     // A warning color that is visible on a dark background
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi,
    }
  },
})
