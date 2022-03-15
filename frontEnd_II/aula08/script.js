let formulario = document.querySelector(`#formulario`);
let texto = document.querySelector(`.text`);

formulario.addEventListener(`onsubmit`, function(event) {
event.preventDefault();
});

window.onload = function() {
    alert('A tela foi carregada')
}

texto.onmouseover = function(){
    texto.style.color= "red";
}