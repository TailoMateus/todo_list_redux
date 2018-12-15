import { createActions, createReducer } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addTodo: ['text'],
  toggleTodo: ['id'],
  loadTodos: []
})

const add = (state = [], action) => [
  ...state, { id: action.id, text: action.text, completed: false }
]

const toggle = (state = [], action) => state.map(todo =>
  (todo.id === action.id)
    ? { ...todo, completed: !todo.completed }
    : todo
)

const load = (state = [], action) => [
  ...state, ...action.todos
]

export default createReducer([], {
  'ASYNC_ADD_TODO': add,
  [Types.TOGGLE_TODO]: toggle,
  'ASYNC_LOAD_TODOS': load,
})