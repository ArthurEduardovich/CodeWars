let a = [];
let b = {};
let c = (() => {});
let d = new RegExp();

console.log( Array.isArray(a) === typeof {} ) ; // true

console.log( a.constructor.name ); // 'Array'
console.log( b.constructor.name ); // 'Object'
console.log( c.constructor.name ); // 'Function'
console.log( d.constructor.name ); // 'RegExp'