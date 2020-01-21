const display = document.querySelector('.display');
function Item(todo, idx) {
  const todoDate = new Date(todo.createdAt || Date.now());
  const div = document.createElement('div');
  div.classList.add('todoItem');
  div.innerHTML = `
  <div class="todoContent">
  ${todo.task}
  <span class="createdAt">${todoDate.toLocaleString()}</span>
  </div>
  <button class="deleteButton">Delete</button>
    `;
  display.append(div);

  div.querySelector('.deleteButton').addEventListener('click', () => {
    todoList.splice(idx, 1);
    localStorage.setItem('todos', JSON.stringify(todoList));
    div.remove();
  });
}

const todoList = JSON.parse(localStorage.getItem('todos') || '[]');

todoList.forEach((todo, idx) => {
  new Item(todo, idx);
});

const createNew = task => {
  const taskIndex = todoList.length;
  const taskObj = {
    task: task,
    createdAt: Date.now(),
  };
  todoList.push(taskObj);
  new Item(taskObj, taskIndex);

  textInput.value = '';
  localStorage.setItem('todos', JSON.stringify(todoList));
};

const textInput = document.querySelector('.textInput');
textInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    const newTask = textInput.value;
    if (!newTask) {
      return;
    }
    createNew(newTask);
  }
});

textInput.focus();
