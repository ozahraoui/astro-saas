import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://solutions4younow.site', // Replace with your actual domain
  integrations: [sitemap()]
});