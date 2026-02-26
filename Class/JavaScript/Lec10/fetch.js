/* 
Fetch is an JS method used to make HTTP request
It returns promises
Syntax --> fetch('url')
*/

fetch("https://jsonplaceholder.typicode.com/users/2") //route
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


/* Activities -->
// 1. understand line by line above code : 
    a) fetch() : is used to call API, fetch returns a Promise
    b) .then() runs when fetch is successful, response = raw data from server, response.json() converts data -> JS object
    c) .catch() : runs if error occurs


//  2. async await examples with fetch method
    async function getUser() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
            let data = await response.json();
            console.log(data);
        }
        catch(error) {
            console.log(error);
        }
    }

    getUser();


//  3. fetch user display names in html list
    async function loadUsers() {

        try {

            let response = await fetch("https://jsonplaceholder.typicode.com/users");

            let users = await response.json();

            let list = document.getElementById("userList");

            users.forEach(function(user) {

                let li = document.createElement("li");

                li.textContent = user.name;

                list.appendChild(li);

            });

        }
        catch(error) {

            console.log("Error:", error);

        }

    }

// call function
loadUsers()

// 4. fetch post show only first 5
async function loadPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let posts = await response.json();

    for(let i = 0; i < 5; i++) {
        console.log(posts[i].title);
    }
}

loadPosts();


// 5. create a fake promises manuaaly resolve 3sec rejevct 3sec 
let promise = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve("Success after 3 seconds");
    }, 3000);

});

promise.then(result => console.log(result));

let promise1 = new Promise(function(resolve, reject) {

    setTimeout(function() {
        reject("Error after 3 seconds");
    }, 3000);

});

promise
.then(result => console.log(result))
.catch(error => console.log(error));

*/




// Top most interview ques
// What is promise in js
// what is status in promise
// diff between promises and callback
// What is fetch meathod in js
// what does fetch return
// why do we use response.json
// diff between then and catch , async and await
// what is promise chaining