function soma (a,b,cb) {
    return a+b+cb();
}

function texto(nome){
    return " esse é o resultado " + nome;
}

function linha(palavra){
    return " essa é a palavra " + palavra;
}

console.log(texto("Olá"));
console.log("--------------------------------------------------")
console.log(soma(5,3,texto));
console.log("--------------------------------------------------")
console.log(linha("Mundo"));
console.log("--------------------------------------------------")
console.log(soma(10,3,linha("Bueno")));
console.log("--------------------------------------------------")
