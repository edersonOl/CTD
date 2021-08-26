var menu = 2
var tempoUsuario = 40

switch (menu) {
    case 1:
        tempoPadrao = 10
        console.log(menu + " - Pipoca")
        break;
     case 2:
        tempoPadrao = 8n
        console.log(menu + " - Macarrão")
        break;
    case 3:
        tempoPadrao = 15
        console.log(menu + " - Carne")
        break;
    case 4:
        tempoPadrao = 12
        console.log(menu + " - Feijão")
        break;
    case 5:
        tempoPadrao = 8
        console.log(menu + " - Brigadeiro")
        break;
}

    if ((menu < 1) || (menu >5)) {
        console.log(" - Prato inexistente")
    }
    else if ((tempoUsuario > tempoPadrao) && (menu > 0) && (menu < 6)) {
        let prato = aumentarTempo(menu, tempoUsuario)
        console.log(prato)
    }
    else if ((tempoUsuario < tempoPadrao) && (menu > 0) && (menu < 6)) {
        let prato = diminuirTempo(menu, tempoUsuario)
        console.log(prato)
    }

function aumentarTempo (tempoPadrao,tempoUsuario) {
    let tempoTotal = tempoPadrao + tempoUsuario   
    if (tempoTotal > (2 * tempoPadrao) && (tempoTotal < (3 * tempoPadrao))) {
        return "A comida queimou"
    }
    else if (tempoTotal > (3 * tempoPadrao)) {
        return "Kabumm"
    }
    return "Prato pronto, bom apetite"
}

function diminuirTempo (tempoPadrao,tempoUsuario) {
    let tempoTotal = tempoPadrao - tempoUsuario
    if (tempoTotal >= tempoPadrao) {
        return "Prato pronto, bom apetite"
    }
    return "Tempo insuficiente"
}
