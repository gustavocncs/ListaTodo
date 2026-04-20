import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo(text) {
    setTodos(prev => [
      { id: crypto.randomUUID(), text, completed: false },
      ...prev,
    ])
  }

  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  function deleteTodo(id) {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  function clearCompleted() {
    setTodos(prev => prev.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const pendingCount = todos.filter(t => !t.completed).length

  return (
    <main className="app">
      <div className="container">
        <div className="header">
          <h1>Minhas Tarefas</h1>
          {pendingCount > 0 && (
            <span className="pending-badge">
              {pendingCount} pendente{pendingCount !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        <TodoForm onAdd={addTodo} />

        <TodoFilter filter={filter} onFilterChange={setFilter} />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        {todos.some(t => t.completed) && (
          <button className="clear-btn" onClick={clearCompleted}>
            Limpar concluídas
          </button>
        )}
      </div>
    </main>
  )
}

export default App
