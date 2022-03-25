const form = document.querySelector('form');
const msgHistory = document.getElementById('comments');
var conteudo = document.querySelector('#textarea');

const commentsHistory = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    commentsHistory.push(conteudo.value);
    addMsg(conteudo.value);
    localStorage.setItem("history",commentsHistory);
});

const addMsg = function (conteudo) {
    const template = `
    <div class="msg">
        <p>${conteudo}</p>
    </div>
    `;
    msgHistory.innerHTML += template;
}

window.onload = function () {
    if (localStorage.getItem("history")) {
        commentsHistory = localStorage.getItem("history").split(",");
        commentsHistory.forEach((item) => addMsg(item))
    }
}
    

