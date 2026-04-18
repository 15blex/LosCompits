
            import * as _w_c_js_0_ from './main.main.es.compiled.js'
import * as _w_c_js_1_ from './main.main.cat.compiled.js'
import * as _w_c_js_2_ from './main.main.it.compiled.js'
import * as _w_c_js_3_ from './main.main.de.compiled.js'
import * as _w_c_js_4_ from './main.main.fr.compiled.js'
import * as _w_c_js_5_ from './main.main.en.compiled.js'
            /** @typedef {import("wuchale/runtime").CatalogModule} CatalogMod */
            /** @typedef {{[locale: string]: CatalogMod}} KeyCatalogs */
            /** @type {{[loadID: string]: KeyCatalogs}} */
            const catalogs = {js: {es: _w_c_js_0_,cat: _w_c_js_1_,it: _w_c_js_2_,de: _w_c_js_3_,fr: _w_c_js_4_,en: _w_c_js_5_}}
            export const loadCatalog = (/** @type {string} */ loadID, /** @type {string} */ locale) => {
                return /** @type {CatalogMod} */ (/** @type {KeyCatalogs} */ (catalogs[loadID])[locale])
            }
            export const loadIDs = ['js']
        