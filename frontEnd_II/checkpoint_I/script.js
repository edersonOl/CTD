/*Utilizando o querySelector (estudo relacionado a matéria do DOM) para receber nas constantes formulário e collectionCards a estrutura do formulário (id = "formulario") e a div responsável pele seção dos cards (id = "cards").*/ 

const formulario = document.querySelector(`#formulario`);
const collectionCards = document.querySelector (`#cards`);

/*Recebendo uma função para adicionar os cards no index.html, utilizando o template String para inserir as informações.*/ 
const adicionaCard = function (titulo, ano, descricao, url) {
    const template = `
    <div class="card">
       <img src="${url}" alt="${titulo}"width="550px">
       <h2>${titulo} </h2>
       <p>Ano: ${ano}</p>
       <p>Descrição: ${descricao}</p>
     </div>
    `;
   collectionCards.innerHTML += template;
}
/*Recebendo uma função para o método onsubmit, função essa responsável por receber as informações preenchidas no formulário.*/ 
formulario.onsubmit = function (e) {
    var titulo = document.querySelector('#titulo').value;
    var ano = document.querySelector('#ano').value;
    var descricao = document.querySelector('#descricao').value;
    var url = document.querySelector('#url').value;
    adicionaCard(titulo,ano,descricao,url);

    /*Previne o comportamento default do evento. Evita o formulário de recarregar a tela quando ocorrer o submit.*/ 
    e.preventDefault();
}

/*Criando um evento para o button de remover cards.*/ 
var removerCards = document.getElementById('remove')
removerCards.addEventListener('click', removeCards)

/*Função para remover todos os cards inseridos na seção.*/ 
function removeCards(){
    collectionCards.innerHTML='';
}


