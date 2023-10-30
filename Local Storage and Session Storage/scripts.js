// Storing data in sessionStorage
localStorage.setItem('key','value');
localStorage.setItem('key2','value');
localStorage.setItem('key','value3');//Overrides the previpous values

// Retrieving data from sessionStorage
const retrievedValue = sessionStorage.getItem('key');
console.log(retrievedValue)
// Removing data from sessionStorage
localStorage.removeItem('key');


//Why we use stringify and JSON.parse ,let's make it clear
//Usually in WebStorage APIs,things are stored as key-value pairs as string,and if we want to store some object as string,we need to use stringify for that so that objects are get stored as string.
//While retrieved the same value,since they are stored as string,we need objects that's wy we use JSON.parse
const user = {name:"Nitesh"};
localStorage.setItem("user",JSON.stringify(user));
localStorage.getItem('user');
JSON.parse(localStorage.getItem('user'));
