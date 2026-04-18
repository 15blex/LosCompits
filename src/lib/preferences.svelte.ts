import { commitLocale, loadLocale } from "wuchale/load-utils";
import { startViewTransition } from "./utils";
export const localeStorageKey = "compits_locale";
export const colorSchemeStorageKey = "compits_colorScheme";

const defaultLocale: Locale = "es";
const defaultColorScheme: ColorScheme = "light";
const supportedLocales = ["es", "cat", "it", "de", "fr", "en"] as const satisfies readonly Locale[];
const supportedColorSchemes = ["light", "dark"] as const satisfies readonly ColorScheme[];

const isLocale = (value: string | null): value is Locale => {
  return value !== null && supportedLocales.includes(value as Locale);
};

const isColorScheme = (value: string | null): value is ColorScheme => {
  return value !== null && supportedColorSchemes.includes(value as ColorScheme);
};

const readStoredLocale = () => {
  const locale = window.localStorage.getItem(localeStorageKey);

  return isLocale(locale) ? locale : defaultLocale;
};

const readStoredColorScheme = () => {
  const colorScheme = window.localStorage.getItem(colorSchemeStorageKey);

  return isColorScheme(colorScheme) ? colorScheme : defaultColorScheme;
};

const applyDocumentPreferences = (locale: Locale, colorScheme: ColorScheme) => {
  document.documentElement.lang = locale;
  document.documentElement.style.colorScheme = colorScheme;
};

export class Preferences {
  locale = $state<Locale>("es");
  colorScheme = $state<ColorScheme>("light");
  private initialized = false;
  private initializationPromise: Promise<void> | null = null;

  initialize() {
    if (this.initialized) {
      return Promise.resolve();
    }

    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    this.initializationPromise = this.loadInitialPreferences()
      .then(() => {
        this.initialized = true;
      })
      .finally(() => {
        this.initializationPromise = null;
      });

    return this.initializationPromise;
  }

  async setLocale(locale: Locale) {
    if (locale === this.locale) {
      return;
    }

    await loadLocale(locale, false);

    startViewTransition(() => {
      this.locale = locale;
      applyDocumentPreferences(locale, this.colorScheme);
      commitLocale(locale);
    });

    window.localStorage.setItem(localeStorageKey, locale);
  }

  setColorScheme(colorScheme: ColorScheme) {
    if (colorScheme === this.colorScheme) {
      return;
    }

    startViewTransition(() => {
      this.colorScheme = colorScheme;
      applyDocumentPreferences(this.locale, colorScheme);
    });

    window.localStorage.setItem(colorSchemeStorageKey, colorScheme);
  }

  private async loadInitialPreferences() {
    const locale = readStoredLocale();
    const colorScheme = readStoredColorScheme();

    await loadLocale(locale, false);

    this.locale = locale;
    this.colorScheme = colorScheme;
    applyDocumentPreferences(locale, colorScheme);
    commitLocale(locale);
  }
}

export const preferences = new Preferences();
