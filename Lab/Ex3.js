// 1. Difference between arrow fun and simple function
//------Simple function-------
// function add(a,b) {
//     return a + b;
// }

//------Arrow function------- 
const add = (a, b) => a +b;   //Arrow functions do not have their own this. They take from parent scope
console.log(add(10, 20));


// 2. What is use of this keyword
//--> The 'this' keyword refers to the object that is currently calling by the function.

// const fun = (name) => console.log(this.name = name);
// fun("Anuja");
const user = {
    name : "Anuja",
    greet : function() {
        console.log(this.name);
    }
};
user.greet();


// 3. Why we not use this keyword in simple function
//---> In simple fun, 'this' does not refer to a specific object , so it gives unexpected result like
// undefined or window and can cause unexpected bugs. 'this' works only when fun is called by an object
const user1 = {
    name : "Anuja",
    greet(){
        const inner = () => console.log(`Hello ${this.name}`)
        inner(); 
    }
};
user1.greet();


// 4. Write a code for arrow fun 3 example
const add1 = (a, b) => a + b;
console.log(`Addition : ${add1(30, 50)}`);

const square = (num) => num * num;
console.log(`Square : ${square(9)}`);

const sub = (a, b) => a - b;
console.log(`Subtraction : ${sub(20, 5)}`);


// 5. Switch case in js
let day = 3;
switch(day){
    case 1 : console.log("Monday");
             break;
    case 2 : console.log("Teusday");
             break;
    case 3 : console.log("Wednesday");
             break;
    case 4 : console.log("Thursday");
             break;
    case 5 : console.log("Friday");
             break;
    case 6 : console.log("Saturday");
             break;
    case 7 : console.log("Sunday");
             break;
    default : console.log("Invalid day");
}


// 6. How to use truthy, falsy values in js with example
// false, 0, -0, 0n, "", null, undefined, NaN --->  values of these is always false
let username = "";
if(username){
    console.log("User exists");
}
else{
    console.log("User not found");
}

// 7. Ternary operator in js
// Syntax --->  condition ? trueExpression : falseExpression;
let n = 10;
console.log((n % 2 == 0) ? "Even" : "Odd");


// 8. Write a code for how to use loops in array with example
// ----for loop------
for(let i = 0; i < 5; i++){
    console.log(i);
}

//----while loop----
let i = 1;
while(i <= 4){
    console.log(i);
    i++;
}

//-----do while loop-----
let j = 1;
do{
    console.log(j);
    j++;
}while(j <= 3);

//----for of loop-----
let arr = [10, 20, 30];
for(let value of arr){
    console.log(value);
}

//---for in loop----
let user2 = {
    name : "Anuja",
    age : 20
};
for(let key in user2){
    console.log(key, user2[key]);
}


// 9. Diff between for_of and for_in
//for of --> used to iterate over values of iterable objects
//for in --> used to iterate over keys of an object
let nums = [60, 70, 80];
for(let val of nums){
    console.log(val);
}

let user3 = {
    name : "Anuja",
    age : 20
}
for(let key in user3){
    console.log(key, user3[key]);
}


// 10. How to write map and filter function in js with 3 examples
//map() ---> used to transform each element of an array and return new array
//filter() ---> used to select elements that satisfy a condition and return new array

let num = [1, 2, 3, 4, 5];
let doubled = num.map(n => n * 2);
console.log(doubled);

let num1 = [10, 20, 30];
let result = num1.map(n => "Value : " + n);
console.log(result);

let num2 = [6, 7, 8, 9];
let squares = num2.map(n => n * n);
console.log(squares);


let num3 = [1, 2, 3, 4, 5, 6];
let even = num3.filter(n => n % 2 == 0);
console.log(even);

let users = [
    { name : "Anuja", age : 20},
    { name : "Riya", age : 16}
];
let adults = users.filter(u => u.age >= 18);
console.log(adults);

let data = ["JS", "", null, "HTML"];
let cleanData = data.filter(Boolean);
console.log(cleanData);