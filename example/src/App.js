import React, { useEffect, useState } from 'react'

import { vanillaDb } from 'vanilla-db'

const App = () => {
  const [d, setD] = useState(null)
  const [k, setK] = useState(null)

  const handleClick = e => {
    const data = [
      { id: 1, name: 'Talia' },
      { id: 2, name: 'Judy' },
      { id: 3, name: 'Hellens' },
      { id: 4, name: 'Collins' },
      { id: 5, name: 'Gabreilla' }
    ]

    const config = {
      db: 'local',
      key: 'student-lists',
      data
    }

    vanillaDb.set(config)
  }

  const handleClickg = () => {
    const query = {
      db: 'local',
      key: 'student-lists'
    }

    let res = vanillaDb.get(query)
    setD(res)
  }

  const handleSClick = e => {
    const data = [
      { id: 0, name: 'Antonio', score: 45 },
      { id: 1, name: 'Burns', score: 67 },
    ]

    const config = {
      db: 'session',
      key: 'students-data-two',
      data
    }

    vanillaDb.set(config)
  }

  const handleSClickg = () => {
    const query = {
      db: 'session',
      key: 'students-data-two'
    }

    let res = vanillaDb.get(query)
    setK(res)
  }

  const handleSync= e => {
    let res = vanillaDb.sync('students-data')
    console.log(res)
  }

  const handleSecure = e => {
    const { api } = vanillaDb.user('sessionhashedkeyexample')
    console.log(api)
  }

  const handleR = e => {
    vanillaDb.remove('local', 'students-data')
  }

  useEffect(() => {
    console.log(vanillaDb.length('session'))
    console.log(vanillaDb.length('local'))
  }, [])

  return (
    <div>
      <button onClick={handleClick}>Add local</button>
      <button onClick={handleClickg}>Get local</button>
      <button onClick={handleSClick}>Do some sessions</button>
      <button onClick={handleSClickg}>get sessions</button>
      <button onClick={handleSync}>Sync a Data</button>
      <button onClick={handleR}>remove</button>
      <button onClick={handleSecure}>Secure User</button>
      <p>local</p>
      <div>
        {d?.map(_d => {
          return (
            <li key={_d.id}>{_d.name}</li>
          )
        })}
      </div>

      <p>sessions</p>
      <div>
        {k?.map(_d => {
          return (
            <li key={_d.id}>{_d.name} score: {_d.score}</li>
          )
        })}
      </div>
    </div>
  )

}

export default App
