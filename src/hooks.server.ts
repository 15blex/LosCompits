// src/hooks.server.ts
import type { Handle } from "@sveltejs/kit";
import { loadLocales, runWithLocale } from "wuchale/load-utils/server";
import { locales } from "./locales/data.js";

import {
  key as jsKey,
  loadCatalog as loadJsCatalog,
  loadIDs as loadJsIDs,
} from "./locales/js.loader.server.js";

import {
  loadCatalog as loadMainCatalog,
  loadIDs as loadMainIDs,
  key as mainKey,
} from "./locales/main.loader.server.svelte.js";

await loadLocales(jsKey, loadJsIDs, loadJsCatalog, locales);
await loadLocales(mainKey, loadMainIDs, loadMainCatalog, locales);

export const handle: Handle = async ({ event, resolve }) => {
  const locale = "es";

  return runWithLocale(locale, async () => {
    return resolve(event);
  });
};
