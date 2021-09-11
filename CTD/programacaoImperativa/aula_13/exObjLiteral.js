let Carro = {
    cor: "branco",
    andar: function (velocidade) {
        return "Andando na velocidade " + velocidade + "km";
    }
}

let Quadrado = {
    cor: "Azul",
    area: function (lado) {
        return "O quadrado é " + Quadrado.cor + " e a área dele é " + lado*lado + " m²";
    }
}

let Triangulo = {
    cor: "Vermelho",
    base: 20,
    area: function (altura) {
        return "O triangulo é " + Triangulo.cor + " e a área dele é " + ((this.base * altura) / 2) + " m²";
    }
}

console.log(Carro.andar(120));
console.log();
console.log(Quadrado.area(10));
console.log();
console.log(Triangulo.area(10));
console.log();
