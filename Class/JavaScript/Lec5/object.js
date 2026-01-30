let myObj = {
    name : "Anuja",
    "full Name" : "Anuja Khandale",
    age : 20,
    location : "Chandgad",
    email : "khandaleanuja@gmail.com",
    isLogin : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday"],
    // [mySym] : "myKey1"
}    //Object literal -> key : value pair

// There are two types of object
// 1. Literals
// 2. Constructors
// 3. Singleton
// When you create constructor object it creates singleton obj. It means itself obj
// When we create literals , it doesn't create singleton

console.log(myObj.email);
console.log(myObj["full Name"]);  //Bad practice



// console.log(myObj);
// console.log(typeof(myObj[mySym]));

const mySym = Symbol("myKey1");
const myObj2 = {
    [mySym] : "ATK"
};
// console.log(myObj2);
// console.log(typeof(myObj2));

myObj.email = "khandaleanuja3@gmail.com";
console.log(myObj.email);
// Object.freeze(myObj)
myObj.email = "anujakhandale@gmail.com";
console.log(myObj.email);

myObj.greeting = function(){
    console.log("Hello JS");   
}

console.log(myObj.greeting());