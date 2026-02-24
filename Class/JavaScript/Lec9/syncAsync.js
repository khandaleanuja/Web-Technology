/* There are two types of programming --> 
 1. Synchronous ----> 
    a) line by line , 
    b) each tast waits for prev task to finish, 
    c) blocking in nature , 
    d) js by deafault single and synchronous
    
*/

//  Synchronous
 console.log("Start")
 const add = (a,b) => a + b;
 let result = add(5, 8);
 console.log(`Result : ${result}`);
 console.log("End");

/*
  2. Asynchronous  --->
    a) some task take time like api call, file read, timer and database
    b) js does not wait, it moves to next line
    c) non blocking behavior
    d) fetching data from server, set timeout, reading files, api calls 
 */

//Asynchronous 
console.log("Start");
setTimeout(() => {
console.log("Inside Timeout");
}, 2000);
console.log("End");
// setTimeout is a asynchronous it waits 2 seci=onds, meanwhile JS preints END after2 sec it prints inside timeout

/* Activities --->
    1. guess the output game count
    2. blocking and non-blocking ---> 2 examples
    3. real time use of these in compenies
    4. api fetch
*/