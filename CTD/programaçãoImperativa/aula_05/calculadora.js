function adicionar(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function quadradoDoNumero(a) {
    var quadrado = multiplicacao(a,a);
    return quadrado;
}

function mediaDeTresNumeros(a,b,c) {
    var somaValores = adicionar(a,b);
    var somaValoresTotal = adicionar(somaValores,c);
    var media = somaValoresTotal / 3;
    return media
}

function calculaPorcentagem(a,b) {
    var dividirPorc = divisao(b,100);
    var porcentagem = multiplicacao(dividirPorc,a);
    return porcentagem
}

function geradorDePorcentagem(a,b) {
    var divisaoGerador = divisao(a,b)
    var gerador = multiplicacao(divisaoGerador,100);
    return gerador
}




// console.log ("-------------- Teste de Operações / Calculadora --------------") - Nível II

var x = 10
var y = 5
var somar = adicionar(x,y);
console.log("A soma de " + x + " + " + y + " = " + somar);

x = 10
y = 5
var sub = subtracao(x,y);
console.log("A subtração de " + x + " + " + y + " = " + sub);

x = 10
y = 5
var mult = multiplicacao(x,y);
console.log("A multiplicacao de " + x + " + " + y + " = " + mult);

x = 10
y = 5
var div = divisao(x,y);
console.log("A divisao de " + x + " + " + y + " = " + div);

// Calculadora - Nível III - Funções Extras

x = 10
var quad = quadradoDoNumero(x);
console.log("O quadrado de " + x + " = " + quad);

x = 10
y = 5
z = 8
var mediaFinal = mediaDeTresNumeros(x,y,z)
console.log("A média é " + " = " + mediaFinal);

x = 10
y = 100
var porcent = calculaPorcentagem(x,y);
console.log("A porcentagem é " + "=" + porcent);

x = 20
y = 200
var gerPorc = geradorDePorcentagem(x,y);
console.log("O resultado do gerador de porcentagem é " + " = " + gerPorc);
