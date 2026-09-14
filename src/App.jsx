import { useEffect, useState } from 'react'
import './App.css'
import sampleItems from './data.json'

function App() {
  const [items, setItems] = useState([])
  const [newItemText, setNewItemText] = useState('')

  useEffect(() => {
    setItems(sampleItems)
  }, [])

  const todoItems = items.filter((item) => item.done === false)
  const completedItems = items.filter((item) => item.done === true)

  const toggleItemDone = (id) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    )
  }

  const addItem = () => {
    const trimmedText = newItemText.trim()

    if (!trimmedText) {
      return
    }

    const nextId = Math.max(0, ...items.map((item) => item.id)) + 1

    setItems((currentItems) => [
      ...currentItems,
      { id: nextId, text: trimmedText, done: false },
    ])
    setNewItemText('')
  }

  const deleteItem = (id) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  return (
    <div className="app-shell">
      <h1>My To-Do List</h1>

      <div className="add-task-row">
        <input
          type="text"
          placeholder="Add a task"
          aria-label="Add a task"
          value={newItemText}
          onChange={(event) => setNewItemText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              addItem()
            }
          }}
        />
        <button type="button" onClick={addItem}>
          Add
        </button>
      </div>

      <div className="board-columns">
        <section className="board-column">
          <div className="column-heading">
            <h2>To-Do</h2>
            <span className="column-count">{todoItems.length}</span>
          </div>
          {todoItems.length === 0 ? (
            <p className="empty-state">No items yet</p>
          ) : (
            <ul className="item-list">
              {todoItems.map((item) => (
                <li key={item.id}>
                  <span>{item.text}</span>
                  <div className="item-actions">
                    <button type="button" onClick={() => toggleItemDone(item.id)}>
                      Complete
                    </button>
                    <button type="button" onClick={() => deleteItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="board-column">
          <div className="column-heading">
            <h2>Complete</h2>
            <span className="column-count">{completedItems.length}</span>
          </div>
          {completedItems.length === 0 ? (
            <p className="empty-state">No items yet</p>
          ) : (
            <ul className="item-list">
              {completedItems.map((item) => (
                <li key={item.id}>
                  <span>{item.text}</span>
                  <div className="item-actions">
                    <button type="button" onClick={() => toggleItemDone(item.id)}>
                      Undo
                    </button>
                    <button type="button" onClick={() => deleteItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
