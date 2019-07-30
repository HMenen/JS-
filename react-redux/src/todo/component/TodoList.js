import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo}) => (
  <ul>
    {
      todos.map(todo => {
        <Todo onClick={toggleTodo(todo.id)} {...todo}/>
      })
    }
  </ul>
)

export default TodoList