import React, {useEffect, useState } from 'react'
import { vanillaDb } from 'vanilla-db'

const App = () => {
  // store all players
  const [players, setPlayers] = useState([])
  // new player state
  const [player, setPlayer] = useState('')

  useEffect(() => {
    //fetch('https://dummyjson.com/products').then(res => res.json()).then(r => console.log(r))
    const config = {
      url: 'https://dummyjson.com/products',
      db: 'session', // session,
      key: 'dummy-products',
      options: {
        // fetch options
      }
    }

    vanillaDb.request(config)
  }, [])

  useEffect(() => {
    const query = {
      db: 'local',
      key: 'players-roaster'
    }

    const data = vanillaDb.get(query)
    setPlayers(data)
  }, [player])

  const handle = e => {
    e.preventDefault()

    const data = [...players,
      {
        id: Math.floor(Math.random() * 9999999),
        name: player
      }]

    const config = {
      db: 'local',
      key: 'players-roaster',
      data
    }
    vanillaDb.set(config)
    setPlayer('')
  }

  return (
    <div className="container">
      <h1>Roaster List </h1>
      <form onSubmit={handle}>
        <input placeholder="player name" type="text" value={player} onChange={e => setPlayer(e.target.value)} />
        <button>Add Player</button>
      </form>
      <p>{players.length} total numbers of players</p>
      <div className="body">
        {players.map(p => (
          <div key={p.id}>
            <h3>{p.name}</h3>
          </div>
        ))}
      </div>
      <i>{vanillaDb.length('local')} Local Database created.</i>
    </div>
  )
}

export default App
