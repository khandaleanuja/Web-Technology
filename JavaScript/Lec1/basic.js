// const a = 10;
//  a = 20;
// console.log(a) // Error

var a = 10;
let ab = 20;

{
    var a = 30;
    let ab = 200;
}

console.log(a)
console.log(ab)