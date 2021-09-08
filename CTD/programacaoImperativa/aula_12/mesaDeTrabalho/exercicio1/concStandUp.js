var participanteA = "Alice";
var participanteB = "Bob";

var alice = [40,40,40]
var bob = [40,90,40]

console.log(quantidadeDeposicoes);

console.log(alice);
console.log("O ganhador é: " + encontrarGanhador (alice,bob))

function encontrarGanhador (a, b) {
    let pontoA = 0;
    let pontoB = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontoA = pontoA + 1;            // pontoA = pontoA + 1 - Acrescenta 1 para a var pontoA
        }
        else if (a[i] < b[i]) {
            pontoB += 1;
        } else {
            pontoA += 0;
            pontoB += 0;
        }
    }
    if (pontoA > pontoB) {
        let ganhador = participanteA;
        return ganhador;
    } else if (pontoA < pontoB){
        ganhador = participanteB;
        return ganhador;
    } else {
        ganhador = "Empate";
        return ganhador;
    }
}

