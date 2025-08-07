// .What will be the output of the following and why?
//  let x;
// console.log(typeof x); ?
// x = null;
// console.log(typeof x); ?

let x;
console.log(typeof x);// Declares a variable x without assigning any value.So, x is undefined.
x = null;
console.log(typeof x)// Now x is explicitly assigned the value null.typeof null returns "object", but null is not actually an object.