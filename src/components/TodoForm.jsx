import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Adicionar nova tarefa..."
        value={text}
        onChange={e => setText(e.target.value)}
        maxLength={120}
      />
      <button type="submit" className="add-btn" disabled={!text.trim()}>
        Adicionar
      </button>
    </form>
  )
}

export default TodoForm
