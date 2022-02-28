/*Exercicio 1 
Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().*/

//Declaração da variável array = [4,25];
let array = [4,25];

//Soma os dois números da array e retorna o total, ou seja, soma = 29;
let soma = array.reduce (function(acumulador, num) {
    return acumulador + num;
});

//Dividi cada número da array pelo total calculado pelo reduce, ou seja, 4 / 29 e 25 / 29;
let novaArray = array.map (function(numero){
    return numero / soma;
});

console.log(array);
console.log(novaArray);
console.log("--------------------------------------------")

/*Exercicio 2
Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras*/

//Declaração da variável palavras e da variável limite.
let palavras = ["ventilador", "móveis", "carro", "televisão", "mesa", "escritório"];
let meuFiltro = 4;

//Declaração da função filtraPalavras, cujo recebe a array "Palavras" e o limite de caracteres para filtrar. Neste caso retorna uma array com palavras maiores que o meuFiltro.
function filtraPalavras (palavras, filtro) {
    return  palavras.filter (palavra => palavra.length > filtro) 
};

console.log(filtraPalavras(palavras,meuFiltro));
console.log("--------------------------------------------")

/*Exercicio 3
Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: 
*/

let alunos = [
    { nome: 'Maria', nota: 9 },
    { nome: 'Francisco', nota: 7 },
    { nome: 'Aline', nota: 6 },
    { nome: 'Sebastião', nota: 10 },
    { nome: 'Júlia', nota: 8 },
];

function ordenaNotas (objAlunos) {
    return objAlunos.sort((nota1,nota2) => nota2.nota - nota1.nota);
};

console.log(ordenaNotas(alunos));

function ordenaNomes (objAlunos) {
    return objAlunos.sort(function(nome1,nome2) {
    return nome1.nome < nome2.nome ? -1 : nome1.nome > nome2.nome ? 1 : 0;
    });
};

console.log(ordenaNomes(alunos));