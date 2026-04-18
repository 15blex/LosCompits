import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite-plus";
import { wuchale } from "wuchale/vite";

export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: {
      polyfill: false,
    },
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["src/locales/**"],
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
    ignorePatterns: ["src/locales/**"],
  },
  plugins: [wuchale("wuchale.config.ts"), sveltekit()],
});
