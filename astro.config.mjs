// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://josephmccracken.netlify.app/",
  integrations: [preact()],

  vite: {
    plugins: [tailwindcss()]
  }
});