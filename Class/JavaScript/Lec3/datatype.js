// memory 
// there are  2 types of memory
//stack memory is used for primitive datatypes
//heap memory is used for non-primitive data types
//eg :
let my_new_yt_channel= "SBG"
let new_yt_channel= my_new_yt_channel
new_yt_channel="YBG"
console.log(new_yt_channel)
console.log(my_new_yt_channel)
// console.log(new_yt_channel)
//Primitive datatypes are stored in stack when we assign 1 variable to another a copy is made a changing one is does not affect another
//value copy hotya
// Non-Primitive
let u1={
    fname:"Shweta",
    id:7,
    age:21
}
let u2 = u1
console.log(u2)
u2.id=25;
console.log(u1.id);
console.log(u2.id);

// obejects stored in heap memory when we assign 1 object 2 another variable reference is copied not the value if we changes 1 both variables are changed
//reference copy hotoy


