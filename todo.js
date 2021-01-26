let todoItems = [];

function renderTodo(todo) {
  const table = document.getElementById("todo-table");
  const row = table.insertRow(-1);
  const textCell = row.insertCell(0);
  const dateCell = row.insertCell(1);
  textCell.innerText = todo.text;
  dateCell.innerText = todo.date;
}

function addTodo() {
  const todoText = document.getElementById("todo-id").value;
  var dateNow = new Date();
  year = dateNow.getUTCFullYear();
  month = dateNow.getMonth()+1;
  day = dateNow.getUTCDate();
  hour = dateNow.getUTCHours();
  minute = dateNow.getUTCMinutes();
  seconds = dateNow.getUTCSeconds();
  var time = String(day)+'/'+String(month)+'/'+String(year)+', '+String(hour)+':'+String(minute)+':'+String(seconds);
  

  const todo = {
    text: todoText,
    date: time
  };
    todoItems.push(todo);
  renderTodo(todo);
}