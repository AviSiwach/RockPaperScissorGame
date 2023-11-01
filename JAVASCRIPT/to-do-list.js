const todoList = [{
    name:'make dinner',
    dueDate:'2023-09-21'
},{
    name:'wasf disher',
    dueDate:'2023-01-07'
}];

renderTodoList();

function renderTodoList(){
let todoListHTML = '';

for(let i = 0; i < todoList.length;i++){
  const todoObject = todoList[i];
  //const dueDate = todoObject.dueDate;
  //const name = todoObject.name;
  const {name,dueDate} = todoObject;
  
  const html = `
  
   <div> ${name} </div>
   <div> ${dueDate} </div>
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    " class="delete-button">Delete</button>
   
   `;
  todoListHTML += html;

}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date')
    const dueDate = dateInputElement.value;
    
        todoList.push({
           // name : name,
          //  dueDate : dueDate
          name,
          dueDate
        });
        console.log(todoList);

        inputElement.value = '';
        renderTodoList();
}