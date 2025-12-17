// @ts-check

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import rehypeMermaid from "rehype-mermaid";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://mhetrerajat.github.io",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    react(),
    (await import("@playform/compress")).default(),
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeMermaid,
        { strategy: "img-png", dark: true, colorScheme: "forest" },
      ],
      rehypeKatex,
    ],
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"],
    },
  },
});
