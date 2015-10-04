(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'module'], factory);
    } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
        factory(exports, module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, mod);
        global.piziLocalStorage = mod.exports;
    }
})(this, function (exports, module) {
    'use strict';

    module.exports = {
        save: function save(key, value) {
            if (!localStorage) console.log('Local storage not avaiable!');
            localStorage.setItem(key, JSON.stringify(value));
        },
        get: function get(key) {
            if (!localStorage) console.log('Local storage not avaiable!');
            return JSON.parse(localStorage.getItem(key));
        },
        'delete': function _delete(key) {
            if (!localStorage) console.log('Local storage not avaiable!');
            localStorage.removeItem(key);
        }
    };
});
