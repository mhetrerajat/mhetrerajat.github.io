import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      optimize: true,
    }),
    tailwind(),
    react({ include: ['**/react/*'] }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),

  ]
});