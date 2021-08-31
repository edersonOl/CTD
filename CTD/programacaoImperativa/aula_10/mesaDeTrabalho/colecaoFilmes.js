/*Coleções de Filmes (e mais…)
O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
    "star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela". 
Importante: verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.

Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().

Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
    "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.

Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar extremamente feliz com nosso trabalho e desempenho.
Bom trabalho!*/

var filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã", "a vida é bela"];
var filmesAnimacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


console.log(convMaiuscula (filmes))                         //Imprimi a função que converte para maiuscula
console.log(addFilmes(filmes, filmesAnimacoes))             //Imprimi a função que adiciona os filmes


var listaCorreta = deletaFilme(filmes)  //variável listaCorreta recebe lista após deletar último item da array
console.log(listaCorreta)                                   //imprimi a lista correta de filmes    
console.log(comparaNotas(listaCorreta, asiaScores, euroScores))   //imprimi o comparativo de notas


function convMaiuscula (array) {
    let conversaoMaiuscula = [];
    for (let i = 0; i < array.length; i++) {
        conversaoMaiuscula += array[i].toUpperCase() + ", ";      
    }
    return conversaoMaiuscula;
}

function addFilmes (arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]); 
    }
    return arr1;
}

function deletaFilme (todosFilmes) {
    let del = todosFilmes.pop();
    console.log("Filme Deletado: " + del);
    return todosFilmes;
}

function comparaNotas (listaFilmes,scoreAsia,scoreEuro) {
    for (let i = 0; i < listaFilmes.length; i++) {
        if (scoreAsia[i] == scoreEuro[i]) {
            console.log(listaFilmes[i] + ": as notas são iguais");
        }else 
            console.log(listaFilmes[i] + ": as notas são diferentes")      
    }
}

