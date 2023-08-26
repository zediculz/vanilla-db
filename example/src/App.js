import React, { useEffect, useState } from 'react'

import { vanillaDb } from 'vanilla-db'

const App = () => {
  const [d, setD] = useState(null)
  const [k, setK] = useState(null)

  const handleClick = e => {
    const config = {
      db: 'local',
      key: 'data-l',
      data: {
        id: '002',
        foo: 'bar'
      }
    }

    vanillaDb.set(config)
  }

  const handleSClick = e => {
    const config = {
      db: 'session',
      key: 'data-s',
      data: { foo: { foo: 'baracgh' } }
    }

    vanillaDb.set(config)
  }

  const handleSync= e => {
    vanillaDb.sync('data-s')
  }

  const handleSecure = e => {
    const { api } = vanillaDb.user('sessionhashedkeyexample')
    console.log(api)
  }

  useEffect(() => {
    const query = {
      db: 'local',
      key: 'data-l'
    }
    const d = vanillaDb.get(query)
    console.log(d)
    console.log(vanillaDb)
  }, [])

  return (
    <div>
      <button onClick={handleClick}>Do something</button>
      <button onClick={handleSClick}>Do some sessions</button>
      <button onClick={handleSync}>Sync Data</button>
      <button onClick={handleSecure}>Secure User</button>
    </div>
  )

}

export default App
