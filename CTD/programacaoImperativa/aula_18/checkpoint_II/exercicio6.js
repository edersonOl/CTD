/*6.	Mover os zeros para o final
Você deve criar uma função chamada moverZeros que receba um array como parâmetro e retorne outro com os números 0 ordenados ao final.

Exemplo: 
moverZeros([false,1,0,1,2,0,1,3,"a"]) deve retornar [false,1,1,2,1,3,"a",0,0]
moverZeros([1,2,0,1,0,1,0,3,0,1]) deve retornar [1,2,1,1,3,1,0,0,0,0]*/

function moverZeros (lista) {
    let qtdZeros = 0;
    let novaLista = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === 0) {
            qtdZeros = qtdZeros + 1;
        }
        else {
            novaLista.push(lista[i]);
        }        
    }
    for (let index = 0; index < qtdZeros; index++) {
        novaLista.push(0);
    }
    return novaLista;   
}
  
let lista = [false,1,0,1,2,0,1,3,'a'];
console.log(moverZeros(lista));