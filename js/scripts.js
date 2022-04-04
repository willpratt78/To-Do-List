function List() {
  this.currentId = 0;
  this.items = {};
}

function Item(task) {
  this.task = task;
  this.isCompleted = false;
}

List.prototype.addItem = function (item) {
  item.id = this.assignId();
  this.items[item.id] = item;
};

List.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

List.prototype.findItem = function (id) {
  if (this.items[id] != undefined) {
    return this.items[id];
  }
  return false;
};

List.prototype.deleteItem = function (id) {
  if (this.items[id] === undefined) {
    return false;
  }
  delete this.items[id];
  return true;
};

// UI Logic
const list = new List();
function buildUI(item) {
  list.addItem(item);
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerText = item.task;
  const id = document.createElement("p");
  id.classList.add("id");
  id.innerText = item.id;
  const button = document.createElement("button");
  button.classList.add("delete-btn");
  button.innerText = "X";
  const input = document.createElement("input");
  input.classList.add("checkbox");
  input.setAttribute("type", "checkbox");
  input.checked = false;
  li.append(id);
  li.append(p);
  li.append(input);
  li.append(button);
  $("#output").append(li);
  $(".delete-btn")
    .off()
    .on("click", function () {
      const id = $(this).siblings(".id").text();
      list.deleteItem(id);
      $(this).parent().remove();
    });
  $(".checkbox")
    .off()
    .on("click", function () {
      const id = $(this).siblings(".id").text();
      const item = list.findItem(id);
      if (this.checked === false) {
        item.isCompleted = false;
      } else {
        item.isCompleted = true;
      }
    });
}
$(document).ready(function () {
  $("form").submit((event) => {
    event.preventDefault();
    const task = $("#task-input").val();
    const item = new Item(task);
    buildUI(item);
    $("#task-input").val("");
  });
});
