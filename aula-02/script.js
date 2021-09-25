// a tarefa ela precisa ter 3 campos
// texto da tarefa, checked: true ou false, 'id'
// Modelo de dados da tarefa
// let array = [{
//   text: 'tarefa',
//   checked: false,
//   id: 1234512315123
// }]
let todoItems = [];

// Funcao que adiciona uma tarefa individual dentro do array das tarefas
const addTodo = (text) => {
  // objeto da tarefa
  const todo = {
    text: text,
    checked: false,
    id: Date.now()
  }
  todoItems.push(todo);
  renderTodo(todo);
  console.log(todoItems);
}


// parte responsavel mapeamento do formulario do html
const form = document.querySelector('.js-form');
console.log(form);

// escutar o evento de submit do formulario
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  console.log(evento);

  // selecionar o element input
  const input = document.querySelector('.js-todo-input');

  // seleciona o value/texto do elemento input
  const text = input.value;
  console.log(text);

  if (text !== '') {
    // envia o texto digitado para a funcao addTodo que espera um texto para adicionar na lista
    addTodo(text);
    // limpa o input
    input.value = '';
    // da o foco no input
    input.focus();
  }
})


// Funcao que renderiza os Todos na tela
const renderTodo = (todo) => {
  addToStorage();

  // mapear a lista de onde deve ser incluida a tarefa
  const list = document.querySelector('.js-todo-list');
  console.log(list);

  // verifica se existe o elemento no dom atravez da seu identificador (data-key)
  const todoExist = document.querySelector(`[data-key='${todo.id}']`);
  // retorna o elemento html que ele achou no DOM
  console.log('elemento que achou', todoExist);

  if(todo.deleted) {
    todoExist.remove();
    return
  }

  // criando um li no DOM 
  const listItem = document.createElement("li");


  // IF do jeito velho
  // const isCheck = '';
  // if(todo.checked) {
  //   isCheck = 'done';
  // }else {
  //   isCheck = '';
  // }

  // if ternario
  const isCheck = todo.checked ? 'done' : '';

  // adiciona a classe todo-item ao elemento li recem criado
  listItem.setAttribute('class', `todo-item ${isCheck}`);

  // adiciona o atributo customizado 'key' no li recem criado
  listItem.setAttribute('data-key', todo.id);

  listItem.innerHTML = `
    <input id=${todo.id} type="checkbox"/>
    <label for=${todo.id} class="tick js-tick" onClick="toogleDone(${todo.id})"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo" onClick="deleteTodo(${todo.id})">
      <svg>
        <use href="#delete-icon"></use>
      </svg>
    </button>
  `;

  // quando voce achar o elemento nao inclui ele na ul ou seja nao faz o append, pelo contrario substitui
  if(todoExist) {
    // subistuir o elemento
    list.replaceChild(listItem, todoExist)
  } else {
    list.append(listItem);
  }
}

const toogleDone = (id) => {
  // eu preciso encontrar o indice do elemento na minha lista

  // const index = todoItems.findIndex((todo) => {
  //   return todo.id === id
  // });

  // forma simplificada
  const index = todoItems.findIndex(todo => todo.id === id);
  todoItems[index].checked = !todoItems[index].checked;
  console.log(todoItems[index]);

  //renderizar a tarefa apos a mudanca do concluido
  renderTodo(todoItems[index]);
}

const deleteTodo = (id) => {
  // preciso encontrar o indice do elemento para excluir
  const index = todoItems.findIndex(todo => todo.id === id);
  // vai me retornar o indice da tarefa que eu desejo excluir
  const todoForDelete = {
    deleted: true,
    ...todoItems[index]
  }
  // remove um item da lista de acordo com o indice onde comeca a excluisa e a quantidade a ser excluido
  todoItems.splice(index, 1);

  renderTodo(todoForDelete);
}


const addToStorage = () => {
  localStorage.setItem('todoList', JSON.stringify(todoItems));
}

const renderListStorage = () => {
  // pega o json string do local storage e transforma esse json em objeto (array de objetos);
  const listStorage = localStorage.getItem('todoList');
  if(listStorage) {
    todoItems = JSON.parse(listStorage);
    console.log(todoItems);
    todoItems.map((todo, index) => {
      renderTodo(todo);
    })
  }
}
renderListStorage();