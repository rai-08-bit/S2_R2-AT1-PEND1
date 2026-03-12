let btnAdicionar = document.querySelector("#btnAdicionar");
let inputTarefa = document.querySelector("#inputTarefa");
let mensagem = document.querySelector("#mensagem");
let listaTarefas = document.querySelector("#listaTarefas");

btnAdicionar.addEventListener("click", () => {
    let InputTarefa = inputTarefa.value;
    if (InputTarefa.trim() === "") {
        mensagem.innerText = `Por favor, insira uma tarefa.`
        mensagem.className = "p-3 text-center text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3"
        return
    }

    mensagem.innerText = `A tarefa "${InputTarefa}" foi adicionada com sucesso!`
    mensagem.className = "p-3 text-center text-info-emphasis bg-info-subtle border border-info-subtle rounded-3"

    let novaTarefa = document.createElement("li");
    novaTarefa.innerText = InputTarefa;
    novaTarefa.className = "list-group-item";
    listaTarefas.appendChild(novaTarefa);
})