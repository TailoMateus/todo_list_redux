import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './ducks/todosSagas'
import reducers from './ducks'
import TodoList from './components/TodoList'
import Counter from './components/Counter'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Fragment>
      <TodoList />
      <Counter />
    </Fragment>
  </Provider>,
  document.getElementById('root')
)
