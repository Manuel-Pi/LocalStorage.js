/**
 * Basic library used to manage LocalStorage and SessionStorage
 */
// Init the storage object
function getStorage(storage) {
    var storageObject = storage === 'session' ? sessionStorage : localStorage;
    if (!storageObject) throw new Error(storage === 'session' ? 'SessionStorage not available.' : 'LocalStorage not avaiable.');
    return storageObject;
}
export default {
    save(key, value, options = {}) {
        getStorage(options.storage).setItem(key, JSON.stringify(value));
    },
    get(key, options = {}) {
        return JSON.parse(getStorage(options.storage).getItem(key));
    },
    delete(key, options = {}) {
        getStorage(options.storage).removeItem(key);
    }
};