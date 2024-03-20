/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import {createVuetify} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        colors: {
          background: '#121212',
          surface: '#1E1E1E',
          primary: '#563e67',
          'primary-darken-1': '#536DFE',
          secondary: '#7353BA',
          'secondary-darken-1': '#4DB6AC',
          error: '#FF5252',
          info: '#64B5F6',
          success: '#81C784',
          warning: '#FFD54F',
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
