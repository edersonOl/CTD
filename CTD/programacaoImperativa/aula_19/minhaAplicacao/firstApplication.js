/*
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
1. a maior e a menor altura do grupo;
2. a média de altura das mulheres;
3. o número de homens.
*/

let dados=[
    {"altura":1.65, "sexo":'F'},
    {"altura":1.80, "sexo":'M'},
    {"altura":1.80, "sexo":'F'},
    {"altura":1.50, "sexo":'M'},
    {"altura":1.70, "sexo":'F'},
    {"altura":1.55, "sexo":'M'},
    {"altura":1.50, "sexo":'F'},
    {"altura":1.52, "sexo":'M'},
    {"altura":1.41, "sexo":'F'},
    {"altura":1.35, "sexo":'M'},
    {"altura":1.45, "sexo":'F'},
    {"altura":1.50, "sexo":'M'}, 
    {"altura":1.35, "sexo":'M'},
    {"altura":1.63, "sexo":'F'},
    {"altura":1.35, "sexo":'M'},   
];

const min=dados.reduce((a,b)=>{
    if(a.altura>b.altura)a=b;
    return a;
})

const max=dados.reduce((a,b)=>{
    if(a.altura<b.altura)a=b;
    return a;
})

let somaAltM = 0;
let qtdM = 0;
let qtdH = 0;

dados.forEach(function (elemento) {
    if (elemento.sexo === 'F') {
        qtdM += 1;
        somaAltM += elemento.altura;
    } else {
        qtdH += 1;
    }
})

let mediaAltM = (somaAltM / qtdM).toFixed(2);

console.log("-------------------EXERCÍCIO 1-------------------")
console.log("A menor altura do banco de dados é " + min.altura + "m");
console.log("A maior altura do banco de dados é " + max.altura + "m");
console.log("A média de altura das mulheres é " + mediaAltM + "m");
console.log("-------------------------------------------------")

/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua 
idade"  a sua opinião em relação ao filme: ótimo 3, bom 2, regular 1.
Faça um programa que receba a idade"  a opinião de 15 espectadores, calcule e imprima:
1. a média das idades das pessoas que responderam ótimo;
2. a quantidade de pessoas que responderam regular;
3. a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/

let espectadores = [
    {"idade": 15, "opiniao": 2},
    {"idade": 17, "opiniao": 2},
    {"idade": 30, "opiniao": 1},
    {"idade": 25, "opiniao": 2},
    {"idade": 45, "opiniao": 1},
    {"idade": 60, "opiniao": 1},
    {"idade": 17, "opiniao": 3},
    {"idade": 18, "opiniao": 3},
    {"idade": 29, "opiniao": 2},
    {"idade": 32, "opiniao": 2},
    {"idade": 35, "opiniao": 1},
    {"idade": 41, "opiniao": 1},
    {"idade": 62, "opiniao": 2},
    {"idade": 20, "opiniao": 3},
    {"idade": 21, "opiniao": 3},
];

function calculoCinema (listaEspectadores) {
    let armazenaIdadeOtm= 0;
    let armazenaOpnOtimo = 0;
    let armazenaOpnBom = 0;
    let armazenaOpnRegular = 0;
    listaEspectadores.forEach(function(opn) {
        if (opn.opiniao == 3) {
            armazenaIdadeOtm += opn.idade;
            armazenaOpnOtimo += 1;
        }
        else if (opn.opiniao == 2) {
            armazenaOpnBom += 1;
        }
        else if (opn.opiniao == 1) {
            armazenaOpnRegular += 1;
        }
    });
    let mediaIdadeOtm = armazenaIdadeOtm / armazenaOpnOtimo;
    let porcentagemOpnBom = (armazenaOpnBom / espectadores.length) * 100;
    console.log("A média de idade com opnião ótimo é " + mediaIdadeOtm + " anos");
    console.log(armazenaOpnRegular + " pessoas classificaram o filme como regular");
    console.log("A porcentagem de pessoas que classificaram como bom foi " + porcentagemOpnBom + "%");
};

console.log("-------------------EXERCÍCIO 2-------------------")
calculoCinema(espectadores);
console.log("-------------------------------------------------")





