import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // See https://docs.astro.build/en/guides/deploy/github/
  site: "https://fthomasvp.github.io",
  server: {
    headers: {
      "Cache-Control": import.meta.env.PROD ? "max-age=31536000" : "no-cache",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});