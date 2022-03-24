const form = document.querySelector('form');
const msgHistory = document.getElementById('comments');
var conteudo = document.querySelector('#textarea');

const arr = [];
const commentsHistory = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    arr.push(conteudo.value);
    addMsg(conteudo);
}
);

const addMsg = function (conteudo) {
    const template = `
    <div class="msg">
        <p>${conteudo.value}</p>
    </div>
    `;
    msgHistory.innerHTML += template;
    localStorage.setItem("history", arr);
}

window.onload = () => {
    if(localStorage.getItem(`history`)) {
        commentsHistory.push(localStorage.getItem("history").split(","));
        for (const comment in commentsHistory) {
            conteudo = commentsHistory[comment];
            addMsg(conteudo);
        }
    }
}
    
