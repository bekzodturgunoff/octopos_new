import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import i18nStatic from "./src/integrations/i18n-static";

export default defineConfig({
  site: "https://octopos.uz",
  output: "static",
  integrations: [i18nStatic()],
  vite: {
    plugins: [tailwindcss()],
  },
});
