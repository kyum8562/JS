var key = Symbol.apply('key');
console.log(typeof key);
 
var obj = {};
obj[key] = 'value';
console.log(obj[key]);

