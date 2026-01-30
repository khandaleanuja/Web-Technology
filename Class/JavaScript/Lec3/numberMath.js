let a=10;
let balance= new Number(10000000);
console.log(balance);
console.log(typeof(balance))
console.log(balance.toString())
console.log(balance.toFixed(2)) // when the precision value is to long then we use this method
console.log(balance.toString().length)
 console.log(balance.toLocaleString('en-US'))//  en-english , IN- india it is by default it is indian

 //math
 console.log(Math.abs(-10))//abs converts -ve val to + ve val
 console.log(Math.round(4.6)) 
 console.log(Math.ceil(4.6))
 console.log(Math.max(10,20))
 console.log(Math.min(10,20))
 console.log(Math.floor(10,20))


 //Math.random()
 //It returns a random decimal number between 0 and 1 (0 <= r < 1)
 let r = Math.random();
 console.log(r);