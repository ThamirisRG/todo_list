// pegar a lista de tarefas - querySelector
const todoList = document.querySelector('.todo-list__task-list');

// pegar o formulario - querySelector
const form = document.querySelector('.form');

// pegar o input do formulário - querySelector
const input = document.querySelector('.form__input');
// pegar o botão de submit do formulário - querySelector
const button = document.querySelector('.form__button');
// add um evento de submit ao formulário

// pega o elemento de contagem de tarefas 
const taskCount = document.querySelector('.todo-list__footer-task-count');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // pega o valor digitado no input
  const value = input.value;

  // cria uma tarefa passando o texto da tarefa como parametro
  const listItem = createTask(value);

  // Adiciona a tarefa na lista de tarefas
  todoList.append(listItem);

  // incrementa o contador de tarefas
  taskCount.textContent = `Existem ${todoList.childNodes.length} tarefas na sua lista`;

  // limpa o input do formulário
  form.reset();
})

// função que vai clonar o template, criar uma tarefa e retornar a tarefa criada
function cloneTemplate() {
  const template = document.querySelector('#todo-list__template');

  return template.content
    .querySelector('.todo-list__task-item')
    .cloneNode(true);
}

function createTask(value) {
  // clona o listItem li
  const listItem = cloneTemplate();
  
  // pega o elemento span dentro da li
  const liText = listItem.querySelector('.todo-list__text-content');

  // adiciona o texto digitado no input ao span
  liText.textContent = value;

  // pega o botão de done
  const buttonDone = listItem.querySelector('.todo-list__button-done');

  // evento de click para finalizar uma tarefa
  buttonDone.addEventListener('click', () => {
    liText.classList.toggle('todo-list__text-content_done');
  });

  // pega o botão de remover tarefa
  const buttonRemove = listItem.querySelector('.todo-list__button-remove');

  // evento de click para remover uma tarefa
  buttonRemove.addEventListener('click', () => {
    listItem.remove();

    // decrementa o contador de tarefas
    taskCount.textContent = `Existem ${todoList.childNodes.length} tarefas na sua lista`;
  });
  
  return listItem;
}

//pega o botão de remover todas as tarefas
const buttonCleanAll = document.querySelector('.todo-list__footer-button-clear');

//evento de click para remover todas as tarefas
buttonCleanAll.addEventListener('click', () => {
  todoList.innerHTML = '';
  
  // decrementa o contador de tarefas
  taskCount.textContent = `Existem 0 tarefas na sua lista`;
});