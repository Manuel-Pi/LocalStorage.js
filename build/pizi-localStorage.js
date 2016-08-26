define(['module', 'exports'], function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = {
        save(key, value) {
            if (!localStorage) console.log('Local storage not avaiable!');
            localStorage.setItem(key, JSON.stringify(value));
        },
        get(key) {
            if (!localStorage) console.log('Local storage not avaiable!');
            return JSON.parse(localStorage.getItem(key));
        },
        delete(key) {
            if (!localStorage) console.log('Local storage not avaiable!');
            localStorage.removeItem(key);
        }
    };
    module.exports = exports['default'];
});
