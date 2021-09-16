function soma (a,b,cb) {
    return a+b+cb();
}

function texto(){
    return " esse é o resultado";
}

console.log(soma(5,3,texto));