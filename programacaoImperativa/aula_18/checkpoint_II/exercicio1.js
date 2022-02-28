/*1.	Loop de Pares

Ex: FizzBuzz – auxilia nesse serviço 

Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"*/

function loopDePares (x) {
    for (let i = 0; i <= 100; i++) {
        let soma = x + i;
        if ((soma % 2) == 0) {
            console.log ("O número " + soma + " é par")
        }
        else{
            console.log (i);
        }
    }
}

loopDePares (2);
