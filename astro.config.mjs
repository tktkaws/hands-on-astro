import { defineConfig } from 'astro/config';
import swup from '@swup/astro';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({

  integrations: [tailwind(), swup({ theme: false })]
});