import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#2c9960",
          footer: "#343A40",
          map: "#333333",
          history: "#FaFFF2",
        },
      },
    },
  },
});
