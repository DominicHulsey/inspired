
let todoList = []
let baseUrl = 'https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/'

const todoApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});



export default class TodoService {

	getTodos(draw) {
		todoApi.get('')
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????

			})
			.fail(logError)
	}

	addTodo(todo) {
		// WHAT IS THIS FOR???
		todoApi.post('', todo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?

			})
			.fail(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}

	removeTodo() {
		// Umm this one is on you to write.... The method is a DELETE

	}

}
