// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import react from "@astrojs/react";
import rehypeMermaid from "rehype-mermaid";

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
