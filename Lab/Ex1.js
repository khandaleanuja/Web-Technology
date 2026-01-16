// const num = 20;
// num = 40;
// console.log(num);


// let a = 2;
// var b = 12;

// {
//     let a = 13;
//     var b = 20;
// }

// console.log(a);
// console.log(b);



// Activity 1
let name = "Anuja";
let age = 21;
let id = 54;
let email = "khandaleanuja3@gmail.com";

console.log("Student information : ");
console.log(`Name : ${name}\nAge : ${age}\nId : ${id}\nEmail : ${email}`);
document.writeln("Student information : ")
document.writeln(`Name : ${name}\nAge : ${age}\nId : ${id}\nEmail : ${email}`);


// Activity 2
// check num is even or odd
let num = 33;
if (num % 2 == 0){
    console.log(`${num} is even`)
    document.writeln("Even")
}
else{
    console.log(`${num} is odd`)
    document.writeln("Odd")
}



// Activity 3 
// check student pass or fail
let percentage = 45;
if (100 >= percentage >= 0 )
    if (percentage >= 40){
        console.log(`Student is pass`)
        document.writeln("Student is pass")
    }
    else{
        console.log(`Student is fail`)
        document.writeln("Student is fail")
    }



// Activity4
// Print numbers
for (let i = 1; i <= 10; i++){
    console.log(i * 2)
    document.writeln(i * 2)
}


// Activity5
let x = 10;
y = x;
x = 2001;
console.log(x, y)
document.writeln(x, y)