function podeSubir(altura,acompanhada) {
    if (altura < 1.20) {
        return false
    }
    else if (altura < 1.40) {
        ((altura < 1.40) && (acompanhada == true))
        return true
    } 
    else if 
        ((altura > 1.40) && (altura < 2.00)) {
        return true
    }  
return false
}

console.log(podeSubir(1.45,true))