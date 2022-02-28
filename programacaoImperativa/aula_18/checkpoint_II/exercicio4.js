/*4.	Novo Array
Você deve criar uma função chamada newArray que receba um número como parâmetro e retorne um novo array com a quantidade de elementos equivalente ao valor do número que você passou por parâmetro.

Exemplo: 
newArray(5) deve retornar [1,2,3,4,5]
newArray(10) deve retornar [1,2,3,4,5,6,7,8,9,10]*/

function newArray (num) {
    let array = [];
    for (let i = 1; i <= num; i++) {
        array.push(i); 
    };
    return array;
};

console.log(newArray(10));