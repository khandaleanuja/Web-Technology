/* 
Promises --> A promise is an object that represent future result of an asynchronous operation
Promises means I promise to give result
promises has three states 
1. pending  --> waiting
2. resolve --> success
3. reject --> cancel

e.g.  pending --> resolve/reject

*/
/*
let success = true;
let mp = new Promise((resolve, reject) => {
if(success){
    resolve("Data Fetch");
}
else{
    reject("Data not found");
}
});

mp
.then((result) => {
console.log(result);})
.catch((error) => {
    console.log(error);})
*/

/* Home activity
1) Why promises are better than callback :
    Callback --> It is a function passed into another fun and executed later
    It is hard to read, debug, maintian called callback hell

    1. No callback hell
    2. Better error handling(one .catch())
    3. Promises allow step-by-step execution
    4. Works with async await


2) create 4 promises examples
3) var declare true -- object show false--error
4) async keyword use karun promises or function use karun
*/

/* const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task Complete");
        resolve();
    }, 3000);
});

promise.then(() => {
    console.log("Promise");
});


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username : 'JS',
            id : 23
        });
    }, 3000);
});

promise2.then((user) => {
    console.log(user);
});
*/

 /* 2) create 4 promises examples
    let promise = new Promise(function(resolve, reject) {
    resolve("Task completed successfully");
});

promise.then(function(result) {
    console.log(result);
});


let promise1 = new Promise(function(resolve, reject) {
    reject("Task failed");
});

promise
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});


let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Data loaded after 2 seconds");
    }, 2000);
});

promise.then(function(result) {
    console.log(result);
});


let success = true;

let promise3 = new Promise(function(resolve, reject) {
    if(success) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }
});

promise
.then(function(result) {
    console.log(result);
})
.catch(function(error) {
    console.log(error);
});   */


/* 3) var declare true -- object show false--error
var status = true;

var obj = {
    status: false
};

console.log(status);     // true
console.log(obj.status); // false
*/


/* 4) async keyword use karun promises or function use karun
async function showMessage() {
    return "Hello World";
}

showMessage().then(function(result) {
    console.log(result);
});

*/
