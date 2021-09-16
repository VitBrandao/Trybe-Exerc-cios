// Botão ENVIAR
/*
let button = document.getElementById("botao-enviar");

button.addEventListener("click", prevention);

function prevention (event) {
    event.preventDefault();
}



*/
// Botão LIMPAR
let clearButton = document.getElementById("botao-limpar");
clearButton.addEventListener("click", clearAll);

function clearAll() {
    let bodyElements = document.querySelector("body");

    let bodyChildren = bodyElements.children;
    bodyChildren.innerText = '';
}