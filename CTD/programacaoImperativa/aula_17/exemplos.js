let array = [2,4,6,8,56,19];

let dobro = array.map (function(num){
    return num * 2;
});

console.log (array);
console.log (dobro);

let numeros = [8,5,6,2]

let num = numeros.map(function (n){ return n*2});

console.log(num);

let idades = [22,8,17,14,30,28,50];

let maiores = idades.filter(function(idade) {
    return idade > 18 && idade < 30;
});

console.log(maiores);

let numbers = [1,5,9,8];

let soma = numbers.reduce(function(acumulador,numero) {
    console.log(acumulador,numero);
    return acumulador + numero;
});

console.log(soma);

let paises = ["Brasil", "Peru", "Cuba", "Russia"];

paises.forEach(function(pais){
    console.log("pais= " + pais);
});
