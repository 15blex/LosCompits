import { adapter as svelte } from "@wuchale/svelte";
import { defineConfig } from "wuchale";
import { adapter as js } from "wuchale/adapter-vanilla";

export default defineConfig({
  hmr: true,
  locales: ["es", "cat", "it", "de", "fr", "en"],
  adapters: {
    main: svelte({ loader: "sveltekit", sourceLocale: "es", files: ["src/**/*.{svelte}"] }),
    js: js({
      loader: "vite",
      sourceLocale: "es",
      files: ["src/**/+{page,layout}.{js,ts}", "src/**/+{page,layout}.server.{js,ts}"],
    }),
  },
});
