import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";


const criarTarefa = (evento) =>{
    evento.preventDefault();
    

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");  
    const valor = input.value;
    
    const tarefa = document.createElement("li"); //criando um elemento, no caso, uma <li></li>
    tarefa.classList.add("task"); //adicionando uma class ao <li>... <li class="task"></li>

    const conteudo = `<p class="content">${valor}</p>` // cria um template de string
    
    tarefa.innerHTML = conteudo //   
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa) // adicionando um elemento filho dentro do elemento pai. Assim sendo adicionado ao final.
    input.value = " "
}

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener('click', criarTarefa)
