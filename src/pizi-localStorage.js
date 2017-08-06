/**
 * Basic library used to manage LocalStorage and SessionStorage
 */
// Storage object
let STORAGE = null;
// Init the storage object
function initStorage(session) {
    if (!STORAGE) {
        STORAGE = (session && sessionStorage) || localStorage;
        if (!STORAGE) console.log(session ? 'SessionStorage not available.' : 'LocalStorage not avaiable.');
    }
    return STORAGE;
}
export default {
    save(key, value, options = {}) {
        if (initStorage(options.session)) STORAGE.setItem(key, JSON.stringify(value));
    },
    get(key, options = {}) {
        if (initStorage(options.session)) return JSON.parse(STORAGE.getItem(key));
    },
    delete(key, options = {}) {
        if (initStorage(options.session)) STORAGE.removeItem(key);
    }
};