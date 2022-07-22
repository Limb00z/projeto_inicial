const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "concluir"
    botaoConclui.addEventListener("click", concluirTarefa);
    return botaoConclui
}

const concluirTarefa = (evento) =>{
    const botaoconclui = evento.target;

    const tarefaCompleta = botaoconclui.parentElement;

    tarefaCompleta.classList.toggle("done")

}

export default BotaoConclui