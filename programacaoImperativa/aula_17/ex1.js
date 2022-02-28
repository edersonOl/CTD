let arrayPares = [2,4,6,8,10,12];

let arrayImpares = arrayPares.map (function(num){
    return num - 1;
});

console.log (arrayPares);
console.log (arrayImpares);
console.log("-----------------------------------------");

let nomes = ["Reginaldo","Maria","João","Aline","Maria","Vando"];

let nome = nomes.filter(function(nome) {
    return nome == "Maria";
});

console.log(nome);
console.log("-----------------------------------------");

let numeros = [1,5,9,3,7];

let texto = numeros.reduce(function(numero1,numero2) {
    return numero1 + " - " + numero2;
});

console.log(texto);
console.log("-----------------------------------------");

let animais = ["Cachorro", "Gato", "Leão", "Onça"];

animais.forEach(function(animal){
    console.log("O anima é " + animal);
});