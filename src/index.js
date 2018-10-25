import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import TodoList from './components/TodoList'
import Counter from './components/Counter'

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <TodoList />
      <Counter />
    </div>
  </Provider>,
  document.getElementById('root')
)