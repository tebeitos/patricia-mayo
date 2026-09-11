import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.patriciamayo.com',
  integrations: [sitemap()],
});
