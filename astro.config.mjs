// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // `site` is the final public URL. Astro uses it to build absolute links for
  // the sitemap, canonical tags, and social preview metadata, so it has to be
  // right before deploying.
  site: "https://johnrjacobson.com",

  // Generates sitemap-index.xml at build time from the pages Astro renders.
  // Ships no client-side JavaScript.
  integrations: [sitemap()],
});
