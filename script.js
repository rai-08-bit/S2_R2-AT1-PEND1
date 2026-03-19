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
    
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            novaTarefa.className = "list-group-item text-decoration-line-through"
        } else {
            novaTarefa.className = "list-group-item"
        }
    })
    
    let btnRemover = document.createElement('button')
    btnRemover.innerText = "Remover Tarefa";
    btnRemover.className = "btn text-center btn-danger border rounded-3";
    
    btnRemover.addEventListener("click", () => {
        let apagarTarefa = btnRemover.parentElement;
        apagarTarefa.remove();
        mensagem.innerText = "Tarefa excluída";
        mensagem.className = "p-3 text-center text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3";
    })

    listaTarefas.appendChild(novaTarefa);
    novaTarefa.appendChild(btnRemover);
    novaTarefa.appendChild(checkbox);
})
