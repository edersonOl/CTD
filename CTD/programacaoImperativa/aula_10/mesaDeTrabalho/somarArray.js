console.log("Exercício - Função somarArray - com array fixo") // Descrição do exercício
var dados = [1, 2, 5];
console.log(somarArray(dados))

console.log(""); // Pula uma linha
console.log("Exercício - Função somarArray utilizando laço for") // Descrição do exercício

var dados2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(somarArray2(dados2))

function somarArray (array) {
    let somaNumeros = 0;
    somaNumeros += array[0] + array[1] + array[2];
    return somaNumeros;
}

function somarArray2 (array2) {
    let soma = 0
    for (let i = 0; i < array2.length; i++) {
        soma += array2[i];    
    }
    return soma;
}