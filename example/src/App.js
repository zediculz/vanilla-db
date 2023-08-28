import React, { useState, useEffect } from 'react'
import { vanillaDb } from 'vanilla-db'

import { Container, AppHeader } from './lib/index.js'

const App = () => {

  const nav = [
    { name: 'home', route: '/' },
    { name: 'About us', route: '/' },
  ]

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    //using vanillaDb to get store todos
    const query = {
      db: 'local',
      key: 'todos'
    }

    const d = vanillaDb.get(query)
    setTodos(d)
  }, [todo])


  //function to add new todo
  const handleAddTodo = e => {
    e.preventDefault()
    const id = Math.floor(Math.random() * 999999)
    let data = {
      id, done: false, todo
    }

    let newTodos = [data, ...todos]

    //using vanillaDb to store todos
    const config = {
      db: 'local',
      key: 'todos',
      data: newTodos
    }

    let stored = vanillaDb.set(config)
    if (stored) {
      setTodo('')
    }
  }

  const handleDone = d => {
    const { id, todo } = d

    const data = {
      id, todo, done: !d.done
    }

    let oldTodos = todos.filter(t => t.id !== id)

    let newTodo = [data, ...oldTodos]

    //using vanillaDb to store todos
    const config = {
      db: 'local',
      key: 'todos',
      data: newTodo
    }
    
    vanillaDb.set(config)
  }

  return (
    <Container>
      <AppHeader
        title="Todo App"
        navObject={nav}
      />
      <p style={{ display: todos.length === 0 ? 'flex' : 'none' }} >no todos yet</p>
      
      <div style={{display: todos.length === 0 ? 'none' : 'flex'}} 
      className="flatlist-wrap">
        {todos.map(_todo => (<div onClick={e => handleDone(_todo)} key={_todo.id}>
        <p> {_todo.todo}</p> <span>{_todo.done ? '👍🏻' : '👎🏻'}</span>
        </div>))}
      </div>

      <form className="form" onSubmit={handleAddTodo}>
        <div>
          <input value={todo} onChange={e => setTodo(e.target.value)} placeholder="todo" />
        </div>
        <div>
          <button>+</button>
        </div>
      </form>
    </Container>
  )
}

export default App
