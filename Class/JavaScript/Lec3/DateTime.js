let MyDate=new Date()
console.log(typeof(MyDate))
console.log(MyDate)
console.log(MyDate.toString())
console.log(MyDate.toISOString())
console.log(MyDate.toDateString())
console.log(MyDate.toLocaleDateString())
console.log(MyDate.getTime())
console.log(MyDate.getDate())
console.log(MyDate.getMonth())
console.log(MyDate.getDay())
console.log(MyDate.getHours())
console.log(MyDate.getFullYear())

// timeStamp
let Mystamp=Date.now()
console.log(Mystamp)
console.log(Date.now()/1000)// convert it into Milisecond

// H.W activity ---> how to get proper time

const now = new Date();
console.log(now);

const dateTime = new Date().toLocaleString('en-IN');
console.log(dateTime);