import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // See https://docs.astro.build/en/guides/deploy/github/
  site: "https://fthomasvp.github.io",
  server: {
    headers: {
      "Cache-Control": import.meta.env.PROD ? "max-age=31536000" : "no-cache",
    },
  },
  integrations: [
    tailwind({
      // See https://docs.astro.build/en/guides/integrations-guide/tailwind/#applybasestyles
      applyBaseStyles: false,
    }),
  ],
});
