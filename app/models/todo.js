export default class ToDo {
  constructor(data) {
    this.task = data.description
    this.user = data.user
    this.status = data.completed
    this.id = data._id
  }

  getTemplate() {
    return `<div class="col-12 card text-dark my-2 rounded bg-light d-flex justify-content-center flex-row" id="taskCard"> 
    <div class="col-6 d-flex justify-content-center align-items-center">
    <div class="card-text"><p>${this.task}</p></div>
    </div>
    <div class="col-6 d-flex justify-content-center">
    <button class= "btn btn-dark" onclick="app.controllers.todoController.removeTodo('${this.id}')">delete task</button>
    </div>
    </div >
      `
  }
}