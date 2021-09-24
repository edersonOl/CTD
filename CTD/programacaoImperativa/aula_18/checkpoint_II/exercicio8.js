/*8.	Arrays de objetos
Você deve criar uma função chamada arrayObjects que receba um número como parâmetro e retorne um array de objetos que tem uma propriedade chamada valor que contém o valor do número e seus anteriores.
Exemplo:
arrayObjects(5) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}, {valor: 4}, {valor: 5}]
arrayObjects(3) deve retornar [{valor: 1}, {valor: 2}, {valor: 3}]
*/

function arrayObjects (num) {
    let obj = [];
    for (let i = 1; i <= num; i++) {
        obj.push({valor: i});  
    }
    return obj;
}

console.log(arrayObjects(5));