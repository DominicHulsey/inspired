import ToDo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/dom/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	taskComplete() {
		document.getElementById('blankCheckbox').onclick = function () {
			let clicked = true
			if (clicked == true) {
				todoApi.post('completed', true)
					.then(res => {
						console.log(res.data)
					})
			}
		}

	}

	get todos() {
		return _state.todos
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(d => new ToDo(d))
				_setState('todos', data)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				this.getTodos()
				console.log(res.data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo.id == todoId)
		todo.status = !todo.status
		todoApi.put(todoId, todo)
			.then(res => {
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				this.getTodos()
			})
		// This one is on you to write.... 
		// The http method is delete at the todoId
	}

}
