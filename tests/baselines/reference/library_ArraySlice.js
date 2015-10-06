//// [library_ArraySlice.ts]
// Array.prototype.slice can have zero, one, or two arguments
Array.prototype.slice();
Array.prototype.slice(0);
Array.prototype.slice(0, 1);

// Array.prototype.slice returns this with zero arguments, allowing tuple slicing
let t1: [number, number] = [1, 2];
let t2: [number, number] = t1.slice();
let t3: [number, number] = t1.slice(0);
let t4: [number, number] = t1.slice(0,1);


//// [library_ArraySlice.js]
// Array.prototype.slice can have zero, one, or two arguments
Array.prototype.slice();
Array.prototype.slice(0);
Array.prototype.slice(0, 1);
// Array.prototype.slice returns this with zero arguments, allowing tuple slicing
var t1 = [1, 2];
var t2 = t1.slice();
var t3 = t1.slice(0);
var t4 = t1.slice(0, 1);
