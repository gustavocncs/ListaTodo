function TodoFilter({ filter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'Todas' },
    { value: 'active', label: 'Pendentes' },
    { value: 'completed', label: 'Concluídas' },
  ]

  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f.value}
          className={`filter-btn ${filter === f.value ? 'active' : ''}`}
          onClick={() => onFilterChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
