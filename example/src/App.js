import React, {useEffect, useState } from 'react'
import { vanillaDb, Session } from 'vanilla-db'

const App = () => {
  const [k, setK] = useState('')
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

    //vanillaDb.request(config)
  }, [])

  useEffect(() => {
    //const key = Session.manage('apikeyexamplebeingstored')
   //console.log(key)
  }, [])

  const handle = e => {
    const f = Session.user(3929163103280)
    console.log(f)
  }


  return (
    <div>
      <button onClick={handle}>Do something</button>
  </div>
  )
}

export default App
