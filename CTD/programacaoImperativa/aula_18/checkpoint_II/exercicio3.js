/*3.	Soma
	Você deve criar uma função chamada soma que receba um número como parâmetro e retorne a soma de todos os seus números anteriores, incluindo o número recebido por parâmetro.

Exemplo: 
soma(3) deve retornar 6 pois faz (1 +2 +3)
soma(8) deve retornar 36*/

let soma = num => {
    let soma = 0;
    for (let i= num; i > 0; i--) {
    soma += i;  
    } 
    return soma;
}

console.log(soma (8));

