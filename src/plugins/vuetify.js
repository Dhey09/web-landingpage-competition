// src/plugins/vuetify.js
import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// Import Material Design Icons
import "@mdi/font/css/materialdesignicons.css";

import {
  VApp,
  VBtn,
  VCard,
  VCardActions,
  VCardItem,
  VCardSubtitle,
  VCardText,
  VCardTitle,
  VCol,
  VDivider,
  VExpandTransition,
  VImg,
  VTextField,
  VParallax,
  VRow,
  VSpacer,
  VTooltip,
} from "vuetify/lib/components/index.mjs";

const vuetify = createVuetify({
  components: {
    VApp,
    VParallax,
    VRow,
    VCol,
    VImg,
    VCard,
    VCardActions,
    VCardTitle,
    VCardSubtitle,
    VCardItem,
    VCardText,
    VBtn,
    VSpacer,
    VDivider,
    VExpandTransition,
    VTooltip,
    VTextField,
  },
  // // //   theme: {
  // // //     defaultTheme: 'light',
  // // //     themes: {
  // // //       light: {
  // // //         colors: {
  // // //           primary: '#1976D2',
  // // //           secondary: '#424242',
  // // //           accent: '#82B1FF',
  // // //           error: '#FF5252',
  // // //           info: '#2196F3',
  // // //           success: '#4CAF50',
  // // //           warning: '#FFC107',
  // // //         },
  // //       },
  //     },
  //   },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

export default vuetify;
