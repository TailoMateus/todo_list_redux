import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Creators } from '../ducks/todos'
import PropTypes from 'prop-types'

class TodoList extends Component {

	state = { newTodoText: '' }

	static propTypes = {
		todos: PropTypes.array.isRequired
	}

	static defaultProps = {
		todos: []
	}

	componentDidMount = () => {
		this.props.loadTodos()
	}

	addNewTodo = () => {
		this.props.addTodo(this.state.newTodoText)
		this.setState({ newTodoText: '' })
	}

	handleChange = ({ target }) => {
		const { value, name } = target
		this.setState({ [name]: value })
	}

	render() {
		const { todos, toggleTodo } = this.props
		return (
			<Fragment>
				<input
					type="text"
					name="newTodoText"
					value={this.state.newTodoText}
					onChange={this.handleChange}
				/>

				<button onClick={this.addNewTodo}>Novo todo</button>
				<ul>
					{
						todos.map(todo => (
							<li
								key={todo.id}
								onClick={() => toggleTodo(todo.id)}
								style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
							>
								{todo.text}
							</li>
						))
					}
				</ul>
			</Fragment>
		)
	}
}

const { addTodo, toggleTodo, loadTodos } = Creators

const mapStateToProps = ({ todos }) => ({ todos })
const mapDispatchToProps = { addTodo, toggleTodo, loadTodos }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
