let inputTitle = prompt("Inserire nome della To-do List");
let inputNumList = parseInt(prompt("Inserire numero liste desiderate"));
const addTaskTitle = function () {
  const title = document.getElementById("title");
  title.innerHTML = inputTitle;
};
console.log(addTaskTitle());

const addTask = function (number) {
  const taskList = document.getElementById("taskLIst");
  let listItem = document.createElement("li" * number);
  taskList.appendChild(listItem);
  let inputForClient = document.getElementById("nameTask");
  let inputButton = document.getElementById("addList");

  for (let i = 0; i < number; i++) {
    if ((inputButton.onclick = true)) listItem.innerHTML = inputForClient;
  }
};
addTask(inputNumList);
console.log(addTask());
