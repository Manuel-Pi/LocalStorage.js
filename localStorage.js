define([],
function(){
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
});