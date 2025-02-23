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
          financial: "#008747",
          light: "#F5F5F5",
          title: "#005322",
          select: "#006400",
          mda: "#D9D9D9",
          mda2: "#027E02",
          video: "#275A12",
          contact: "#006400",
          investment: "E7F8E7",
          contact: "#006D24",
        },
      },
    },
  },
});
