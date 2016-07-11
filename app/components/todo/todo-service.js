function TodoService(){
	//This service is all setup for you no edits necessary here
	this.getTodos =  function(){
		var t = localStorage.getItem('todo');
		if(t){
			console.log('Todo Data:', JSON.parse(t))
			return JSON.parse(t)
		}
		console.log('Todo Data:', [])
		return [];
	}
	
	this.saveTodos =  function(todos){
				//^^^ Less typical but todos should always be the entire array
		localStorage.setItem('todo', JSON.stringify(todos));
		console.log('Todo Data Saved:', todos);
	}
}
