// @ts-check
import { defineConfig } from 'astro/config';

// Importing both tailwind and react integrations
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react() // Add the react integration here
  ],
});
