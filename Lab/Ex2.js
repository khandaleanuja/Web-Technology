// 1. Create an array, function, object and print
const fruits = ["Apple", "Mango", "Banana", "Stwaberry"];
console.log(fruits)

function greet(name) {
    return `Hello ${name}`;
}
console.log(greet("Anuja"));

const person = {
    name : "Anuja",
    age : 20,
    city : "Chandgad"
};
console.log(person)


// 2. Reverse number
let num = 1234;
let rev = 0;

while(num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
}

console.log(`Reverse number : ${rev}`);


// 3. Check number is palindrome
let num1 = 12321;
let original = num1;
let rev1 = 0;

while(num1 > 0) {
    rev1 = rev1 * 10 + (num1 % 10);
    num1 = Math.floor(num1 / 10);
}

if (original == rev1) {
    console.log(`${original} is palindrome`);
}
else {
    console.log(`${original} is not palindrome`);
}


// 4. Fibonaci series
let num2 = 10;
let a = 0;
let b = 1;
console.log(a);
console.log(b);

for(let i = 3; i <= 10; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}


// 5. Largest number in an array
const num3 = [10, 20, 30, 40, 50];
let max = 0;
for(let i = 0; i < num3.length; i++){
    if (num3[i] < num3[i + 1]){
         max = num3[i + 1];
    }
}

console.log(`Largest number in array is : ${max}`);


// 6. Remove duplicates from array
const num4 = [10, 10, 20, 30, 60, 70, 80, 80];
const unique = [];
for(let i = 0; i < num4.length; i++){
    if (num4[i] != num4[i + 1]){
        unique[i] = num4[i];
    }
}
console.log(`Array without duplicates : ${unique}`);

// 7. Find missing number in an array
let array = [1,2,3,4,5,7];
let n = 7;
let totalSum = (n * (n + 1))/2;
let arrSum = 0;

for(let i = 0; i< array.length; i++){
    arrSum += array[i];
}
let missingNum = totalSum - arrSum;
console.log(`Missing number : ${missingNum}`);


// 8. Reverse string
let str = "anuja";
let reverse = "";

for(let i = str.length - 1; i >= 0; i--){
    reverse += str[i];
}

console.log("Reversed String :", reverse);


// 9. Count vowels in a string
let text = "javascript";
let count = 0;
let vowels = "aeiouAEIOU";

for(let i = 0; i < text.length; i++){
    if(vowels.includes(text[i])){
        count++;
    }
}
console.log(`Vowels in string : ${count}`);

// 10. Palindrome string
let word = "madam";
let rev2 = "";
for(let i = word.length - 1; i >= 0; i--){
    rev2 += word[i];
}

if(word == rev2){
    console.log("String is palindrome");
}
else{
    console.log("Stirng is not palindrome");
}


// 11. Check prime number
let num5 = 2;
let isPrime = true;

if(num5 <= 1){
    isPrime = false;
}
else{
    for(let i = 2; i < num5; i++) {
        if(num5 % i == 0){
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime ? "Prime number" : "Not prime number");

// 12. Factorial of a number
let num6 = 10;
let fact = 1;
for(let i = 1; i <= num6; i++){
    fact *= i;
}
console.log(`Factorial of ${num6} is : ${fact}`);


// 13. Function to find even or add
function checkEvenOdd(num){
    if(num % 2 == 0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}

checkEvenOdd(10);

// 14. Function to find sum of array
function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(`Sum of array is : ${sum}`);
}

let arr = [10, 20, 30, 40];
sum(arr);