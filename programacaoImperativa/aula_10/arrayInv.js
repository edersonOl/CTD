console.log("Exercício 1 - Função imprimirInverso") // Descrição do exercício
var contagem = [0, 1, 2, 3, 4, 5];
imprimirInverso0(contagem);

console.log(""); // Pula uma linha
console.log("Exercício 2 - Função inverter") // Descrição do exercício

var contRegressiva = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(inverter(contRegressiva));

function imprimirInverso0(array){
    console.log (array[5]); 
    console.log (array[4]); 
    console.log (array[3]);  
    console.log (array[2]); 
    console.log (array[1]);
    console.log (array[0]);
}

function inverter (array2){
    let arrayInv = [array2[10],array2[9],array2[8],array2[7],array2[6],array2[5],array2[4], array2[3], array2[2], array2[1], array2[0]];
    return arrayInv;
}




