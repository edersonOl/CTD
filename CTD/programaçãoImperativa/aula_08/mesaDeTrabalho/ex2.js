let x = 10;
let y ="a";
let res = (y==="b" || x >= 10);

x=3;
y=8;
let res1 = (!(x == "3" || x === y) && (!(y !== 8 && x <= y)));

let str = "";
let msg = "haha!";
let eBonito = "false";
let res2 = (!((str || msg) && eBonito));

console.log(res);
console.log(res1);
console.log(res2);
