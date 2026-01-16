// Conversion of alltypes

// To string
let a = String(123);
console.log(a);
let b = String(true);
console.log(b);
let c = String(null);
console.log(c);
let d = String(undefined);
console.log(d);
let e = String([1,2,3]);
console.log(e);
let f = String({a : 1});
console.log(f);

// To number
let g = Number("123") ;
console.log(g);
let i = Number("12.5");
console.log(i);
let j = Number("abc");
console.log(j);
let k = Number(true);
console.log(k);
let l = Number(false);
console.log(l);
let m = Number(null);
console.log(m);
let n = Number(undefined);
console.log(n);
let o = Number([]);
console.log(o);
let p = Number([1,2]);
console.log(p);

// To boolean
let q = Boolean(1)   
console.log(q)
let r = Boolean(0)   
console.log(r)
let s = Boolean("Hello")   
console.log(s)
let t = Boolean("")   
console.log(t)
let u = Boolean(null)   
console.log(u)
let v = Boolean(undefined)   
console.log(v)
let w = Boolean([])   
console.log(w)
let x = Boolean({})   
console.log(x)