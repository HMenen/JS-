import React from 'react'
import AddTodos from '../container/AddTodo'
import VisibleTodoList from '../container/VisibleTodoList'
import Footer from './Footer'

const App = () => (
  <div>
    <AddTodos />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App