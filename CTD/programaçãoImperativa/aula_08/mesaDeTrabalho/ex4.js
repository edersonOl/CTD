function podeSubir(altura,acompanhada) {
    if (altura < 1.20) {
        return "Acesso negado"
    }
    else if (altura < 1.40) {
        ((altura < 1.40) && (acompanhada == true))
        return "Acesso autorizado somente com acompanhante"
    } 
    else if 
        ((altura > 1.40) && (altura < 2.00)) {
        return "Acesso autorizado"
    }  
return false
}

console.log(podeSubir(1.45,false))