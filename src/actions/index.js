export const addTodo = text => ({
	type: 'ASYNC_ADD_TODO',
	text,
})

export const toggleTodo = id => ({
	type: 'TOGGLE_TODO',
	id
})

export const loadTodos = () => ({
    type: 'ASYNC_LOAD_TODOS'
})
