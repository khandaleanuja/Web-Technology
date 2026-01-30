let str1 = "Anuja"
console.log(`Name : ${str1}, Type : ${typeof(str1)}`)

// Stirng interpolation
console.log(`Hello my name is ${str1}`)

const game_count = new String("Anuja")


const gameCount = new String("Anuja");
console.log(gameCount.length);
console.log(gameCount.toLowerCase());
console.log(gameCount.charAt(2));
console.log(gameCount.indexOf('u'));



//split()
//Breaks a string into an array based on a separator
let text = "apple,banana,mango";
let result = text.split(",");
console.log(result);

//splice()
//Works on array--> remove, add, replace elements
//Syntax --> arr.splice(startInd, deleteCount, item1, item2,...)

let arr = [1, 2, 4];
arr.splice(3, 0, 3);
console.log(arr);