import React, { useEffect, useState } from 'react'

import { vanillaDb } from 'vanilla-db'

const App = () => {
  const [d, setD] = useState(null)
  const [k, setK] = useState(null)

  const handleClick = e => {
    vanillaDb.set('local', { key: 'data', data: { foo: 'bar' }})
  }

  const handleSClick = e => {
    vanillaDb.set('session', { key: 'data-sync', data: { foo: {foo:'bar'} } })
  }

  const handleSync= e => {
    vanillaDb.sync('data-sync')
  }

  const handleSecure = e => {
    const { api } = vanillaDb.user('sessionhashedkeyexample')
    console.log(api)
  }

  useEffect(() => {
    let _d = vanillaDb.get('local', 'data-sync')
    let _dd = vanillaDb.get('session', 'data-sync')
    const { key } = vanillaDb.secure('12345')
   setK(key)
    console.log(_d, _dd, key)
    console.log(vanillaDb.length('local'))
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
