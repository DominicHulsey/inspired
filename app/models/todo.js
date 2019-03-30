export default class ToDo {
  constructor(data) {
    this.task = data.description
    this.user = data.user
    this.status = data.completed
    this.id = data._id
    this.time = hour()



    function hour() {
      let d = new Date
      let hour = d.getHours()
      if (hour <= 6 && hour >= 21) {
        return `night`
      }
      else if (hour <= 12) {
        return `morning`
      }
      else if (hour > 12 && hour < 18) {
        return `afternoon`
      }
      else if (hour > 18 && hour < 21) {
        return `evening`
      }
    }
  }


  getTemplate() {
    return `<div class="col-12 rounded h-100 d-flex justify-content-center flex-row mt-1" id="taskCard"> 
    <div class="col-1 pb-2 offset-1 d-flex align-items-center">
      <input class="form-check-input" type="checkbox" value="option1" onclick="app.controllers.todoController.toggleTodoStatus('${this.id}')">
      </input></div>
    <div class="col-6 d-flex align-items-center">
    <div class="text-white" id="taskText">${this.task}</div>
    </div>
    <div class="col-5">
    <button class= "btn btn-secondary" onclick="app.controllers.todoController.removeTodo('${this.id}')"><i class="fas fa-trash-alt"></i></button>
    </div>
    </div><hr>
      `
  }
}