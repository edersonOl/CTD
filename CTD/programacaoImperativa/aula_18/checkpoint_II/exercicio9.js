/*9.	Arrays de objetos 2
Você deve criar uma função chamada arrayObjectsTwo que recebe um número e uma palavra como parâmetro e retorna um array de objetos que possui: uma propriedade nomeada pela palavra passada por parâmetro e o valor dessa propriedade deve ser o número passado por parâmetro e seus anteriores.

Exemplo:
arrayObjectsTwo(5, “olá”) deve retornar [{olá: 1}, {olá: 2}, {olá: 3}, {olá: 4}, {olá: 5 }]
arrayObjectsTwo(3, “tchau”) deve retornar [{tchau: 1}, {tchau: 2}, {tchau: 3}]
*/

function arrayObjectsTwo (numero, palavra) {
    let obj = [];
    for (let i = 1; i <= numero; i++) {
        obj.push({palavra: palavra, valor: i});  
    }
    return obj;
}
 
console.log(arrayObjectsTwo(5, "olá"));
