import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://robotomist.github.io',
  base: '/astro',
  integrations: [tailwind()]
});