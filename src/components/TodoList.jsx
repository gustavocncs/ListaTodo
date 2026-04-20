import { AnimatePresence, motion } from 'framer-motion'
import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhuma tarefa encontrada.</p>
      </div>
    )
  }

  return (
    <ul className="todo-list">
      <AnimatePresence initial={false}>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default TodoList
