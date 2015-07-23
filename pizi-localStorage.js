(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.pls = factory();
  }
}(this, function () {
    if(!localStorage){
		console.log('Local storage not avaiable!');
		return;
	} else{
		return {
			save : function(key, value){
				localStorage.setItem(key, JSON.stringify(value));
			},
			get : function(key){
				return JSON.parse(localStorage.getItem(key));
			}
		};
	}
}));