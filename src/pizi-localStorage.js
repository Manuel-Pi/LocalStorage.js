export default {
    save: function (key, value){
        if(!localStorage) console.log('Local storage not avaiable!');
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function (key){
        if(!localStorage) console.log('Local storage not avaiable!');
        return JSON.parse(localStorage.getItem(key));
    },
    delete: function (key){
        if(!localStorage) console.log('Local storage not avaiable!');
        localStorage.removeItem(key);
    }
}; 