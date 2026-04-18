
            
            /** @typedef {() => Promise<import("wuchale/runtime").CatalogModule>} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {js: {es: () => import('./main.main.es.compiled.js'),cat: () => import('./main.main.cat.compiled.js'),it: () => import('./main.main.it.compiled.js'),de: () => import('./main.main.de.compiled.js'),fr: () => import('./main.main.fr.compiled.js'),en: () => import('./main.main.en.compiled.js')}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])()
            }
            export const loadIDs = ['js']
        