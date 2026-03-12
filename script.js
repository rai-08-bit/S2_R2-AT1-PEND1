let btnEnviar = document.querySelector("#btnEnviar");
let mensagem = document.querySelector("#mensagem");

btnEnviar.addEventListener("click", () => {
    mensagem.innerText = `CABUMMMMMMM! Texto modificado com Java Script`;
    mensagem.className = "text-success-emphasis bg-success-subtle border border-success-subtle rounded-3"
})