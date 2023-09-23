import React, {useEffect, useState } from 'react'
import { vanillaDb, vanillaAuth } from 'vanilla-db'

const App = () => {
  // store all players
  const [players, setPlayers] = useState([])
  // new player state
  const [player, setPlayer] = useState('')
  const [auth, setAuth] = useState('')

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
      db: 'localstorage',
      key: 'players-roaster'
    }

    const data = vanillaDb.get(query)
    setPlayers(data)
  }, [player])

  useEffect(() => {
   //vanillaAuth.init('something like this that needed to be secured')
  }, [])

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

  const doThis = () => {
    //const t = vanillaAuth.user("0x4785906qlUzX54026XZc")
    //setAuth(t)
  }

  const handleDel = id => {
    const remPlayers = players.filter(player => player.id !== id)
    setPlayers(remPlayers)
    const config = {
      db: 'local',
      key: 'players-roaster',
      data: remPlayers
    }
    vanillaDb.set(config)
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
            <button onClick={e => handleDel(p.id)}>delete</button>
          </div>
        ))}
      </div>
      <h3>{auth}</h3>
      <button onClick={doThis}>Do this {auth}</button>
      <i>{vanillaDb.length('local')} Local Database created.</i>
    </div>
  )
}

export default App
