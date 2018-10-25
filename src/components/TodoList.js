import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from '../actions/index'

class TodoList extends Component {

  state = { newTodoText: '' }

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
		console.log(this.props, 'Props')
    return (
      <div>
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
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })
const mapDispatchToProps = { addTodo, toggleTodo }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)