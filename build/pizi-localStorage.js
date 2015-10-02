(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.piziLocalStorage = mod.exports;
    }
})(this, function (exports) {
    /*jshint esnext: true */
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    exports.save = save;
    exports.get = get;

    function save(key, value) {
        if (!localStorage) console.log('Local storage not avaiable!');
        localStorage.setItem(key, JSON.stringify(value));
    }

    function get(key) {
        if (!localStorage) console.log('Local storage not avaiable!');
        return JSON.parse(localStorage.getItem(key));
    }
});
//# sourceMappingURL=pizi-localStorage.js.map
