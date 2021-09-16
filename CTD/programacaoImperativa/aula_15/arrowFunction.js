function somar(x,y) {
    return x+y;
}

let funcSomar = (x,y) => {
    return x+y;
}

let funcSomar2 = (x,y) => x+y;

let funcSomar3 = x => x+5;

console.log(somar(5,3));
console.log(funcSomar2(5,3));
console.log(funcSomar3(3));