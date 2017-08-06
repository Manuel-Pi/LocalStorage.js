/**
 * Basic library used to manage LocalStorage and SessionStorage
 */
// Storage object
let STORAGE = null;
// Init the storage object
function initStorage(storage) {
    if (!STORAGE) {
        STORAGE = storage === 'session' ? sessionStorage : localStorage;
        if (!STORAGE) console.log(storage === 'session' ? 'SessionStorage not available.' : 'LocalStorage not avaiable.');
    }
    return STORAGE;
}
export default {
    save(key, value, options = {}) {
        if (initStorage(options.storage)) STORAGE.setItem(key, JSON.stringify(value));
    },
    get(key, options = {}) {
        if (initStorage(options.storage)) return JSON.parse(STORAGE.getItem(key));
    },
    delete(key, options = {}) {
        if (initStorage(options.storage)) STORAGE.removeItem(key);
    }
};