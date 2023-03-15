import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  // See https://docs.astro.build/en/guides/deploy/github/
  site: "https://fthomasvp.github.io",
});
