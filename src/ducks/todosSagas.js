import { takeEvery, put, call, select } from 'redux-saga/effects'
import axios from 'axios'

const apiAdd = (text, length) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text + ' OPA ' + length)
        }, 1000)
    })
}

const apiGet = async () => {
    return await axios.get('https://api.myjson.com/bins/s1kv2')
        .then(response => response.data)
        .catch(error => error)
}

function* asyncAddTodo({ text }) {
    const todos = yield select(state => state.todos)

    const response = yield call(apiAdd, text, todos.length)
    yield put({ type: 'ASYNC_ADD_TODO', text: response, id: todos.length })
}

function* asyncLoadTodos() {
    const response = yield call(apiGet)
    yield put({ type: 'ASYNC_LOAD_TODOS', todos: response })
}

export default function* root() {
    yield [
        takeEvery('ADD_TODO', asyncAddTodo),
        takeEvery('LOAD_TODOS', asyncLoadTodos)
    ]
}
