const type = document.querySelector('.type');
const add = document.querySelector('.add');
const container = document.querySelector('.container');

const filter = document.querySelector('.filter');
const filtInput = document.querySelector('.filterInput');

const storage = localStorage.getItem('list') || '[]';
const todos = JSON.parse(storage);

const setStorage = arr => {
  const list = JSON.stringify(arr);
  localStorage.setItem('list', list);
};

const remove = element => {
  const list = todos.filter(item => {
    return item !== element.innerText;
  });
  setStorage(list);
  element.remove();
};

const render = (arr) => {
  container.innerHTML = ''
  arr.forEach(e => {
    const div = document.createElement('h3');
      div.innerText = e;
      container.append(div);
      div.addEventListener('click', () => {
      remove(div);
    });
  });
};

filter.addEventListener('click', () => {
  console.log('filter has been clicked');
  const value = filtInput.value;
    if (value.trim() !== '') {
    const list = todos.filter(item => {
      return item === value;
    });
    console.log('list', list)
    setStorage(list);
    render(list);
  }
});

add.addEventListener('click', () => {
  const value = type.value;

  if (value.trim() !== '') {
    const div = document.createElement('h3');
    div.innerText = value;
    todos.push(value);
    setStorage(todos);

    div.addEventListener('click', () => {
      remove(div);
    });

    container.append(div);
  }
});

render(todos)
