//Singleton object
const user = new Object;
console.log(user);

const user1 = {};  //non singleton obj
user1.id = 12;
user1.name = "Anuja";
user1.isLogin = true;
console.log(user1); 


//object inside object
const user2 = {
    email : "khandaleanuja@gmail.com",
    username : {
        fullname : {
            fname : "Anuja",
            sname : "Khandale"}
    }
}
console.log(user2);

console.log(user2.username.fullname.fname);