const urlImagens = [];

const imagens = document.querySelectorAll("img");

imagens.forEach((_, index) => {

    const url = prompt(`Adicione o url para a imagem ${index + 1}`);

    urlImagens.push(url);

});

urlImagens.forEach((url, index) => {

    const imagem = document.querySelector(`#imagem-${index+1}`);
    const link = document.querySelector(`#link-${index+1}`);
    imagem.setAttribute("src", url);
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
});

/* ETAPA 3
   - Nó pai: <div class="conteudo">
   - Nó filho repetitivo: 

        <div class="conteudo"></div>
        <div class="cartao">
            <a id="link-1"><img class="imagem" alt="imagem-1" id="imagem-1"/></a>


   - Explicação: 

   Construir o nó pai <div class="conteudo"> pois ela engloba todos as tags citadas como nó filho. Portanto, uma refatoração sugerida seria inlcuir todas as tags denominadas nó filho dentro de uma template string e então inseri-las dentro de uma estrutura de repetição.
*/
