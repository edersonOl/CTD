/*2.	Loop ímpares com palavra
Você deve criar uma função chamada loopDeImpares que receba um número e uma palavra como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
Agora, modifique o código para que, caso esse número somado com o número passado por parâmetro seja ímpar, mostre a palavra passada por parâmetro no console.*/

function loopDeImpares (num, palavra) {
    for (let i = 0; i <= 100; i++) {
        let soma = num + i;
        if ((soma % 2) !== 0) {
            console.log (palavra)
        }
        else{
            console.log (i);
        }
        
    }
}

loopDeImpares (3,"Software");
