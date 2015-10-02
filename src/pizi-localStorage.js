/*jshint esnext: true */
export function save(key, value){
    if(!localStorage) console.log('Local storage not avaiable!');
    localStorage.setItem(key, JSON.stringify(value));
}
export function get(key){
    if(!localStorage) console.log('Local storage not avaiable!');
    return JSON.parse(localStorage.getItem(key));
}