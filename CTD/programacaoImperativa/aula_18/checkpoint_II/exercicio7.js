/*7.	Lidando com dois arrays
Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".

Exemplo:
arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
Eu sou 1 e eu sou o
Eu sou 2 e eu sou l
Eu sou 3 e eu sou á*/

function arrayHandler(arra1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log("Eu sou o " + array1[i] + " e eu sou o " + array2[i]);
        
    }
}

let array1 = [1, 2, 3,];
let array2 = ['O', 'L', 'Á'];

arrayHandler(array1, array2);