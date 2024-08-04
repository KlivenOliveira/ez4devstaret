//encontrar e adicionar tarefa
const cbtn_task = document.querySelector('.app__button--add-task')
const cformTask = document.querySelector('.app__form-add-task')
const ctextarea = document.querySelector('.app__form-textarea')
const ulTarefa = document.querySelector('.app__section-task-list')
const tarefas =JSON.parse(localStorage.getItem ('tarefas')) || []

function fCriarELementoTarefa(tarefa){
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `

        const paragrafo = document.createElement('p')
        paragrafo.textContent = tarefa.descricao
        paragrafo.classList.add("app__section-task-list-item-description")

        const botao = document.createElement('button')
        botao.classList.add("app_button-edit")


        botao.onclick = () =>{
        const novaDescricao =  prompt("Qual é o novo nome ta tarefa")
         paragrafo.textContent = novaDescricao
         localStorage.setItem('tarefas',JSON.stringify(tarefa))
        }

    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute('src', '/imagens/edit.png')
    botao.append(imagemBotao)

        li.append(svg)
        li.append(paragrafo)
        li.append(botao)

       return li
        
}

cbtn_task.addEventListener('click',() =>{
    (cformTask.classList.toggle("hidden"))
    }
)

    cformTask.addEventListener('submit',(e) =>{
        e.preventDefault()
        const tarefa = {
            descricao:ctextarea.value
        }
        tarefas.push(tarefa)
        const elementoTarefa = fCriarELementoTarefa(tarefa)
        ulTarefa.append(elementoTarefa)
        localStorage.setItem('tarefas',JSON.stringify(tarefa))
        ctextarea.value= ''
        cformTask.classList.add("hidden")
         
    })

    tarefas.forEach(tarefa => {
       const elementoTarefa =  fCriarELementoTarefa(tarefa)
       ulTarefa.append(elementoTarefa)
    })



