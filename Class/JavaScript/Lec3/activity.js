//check all methods/function

const gameCount = new String("Anuja");
//1.toUpperCase()
console.log(gameCount.toUpperCase());

//2.slice()
console.log(gameCount.slice(0,4));

//3.repeat()
console.log(gameCount.repeat(3));

//4.include()
console.log(gameCount.includes('nu'));

//5.trim()
let str2 = "   Hello World   ";
console.log(str2.trim());

//6.substring()
console.log(gameCount.substring(0,5));

//7.stratswith() and ensdswith()
console.log(gameCount.startsWith('Anu'));
console.log(gameCount.endsWith('ja'));

//8.replace
console.log(gameCount.replace('Anuja','Khandale'));