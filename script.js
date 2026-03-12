let nome = document.querySelector("#nome");
let btnEnviar = document.querySelector("#btnEnviar");
let mensagem = document.querySelector("#mensagem");

btnEnviar.addEventListener("click", () => {
    let Nome = nome.value;
    if (Nome.trim() === "") {
        mensagem.innerText = `Por favor, insira um nome.`
        mensagem.className = "text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3"
        return
    }

    mensagem.innerText = `Olá ${Nome}!`;
    mensagem.className = "text-success-emphasis bg-success-subtle border border-success-subtle rounded-3"
})