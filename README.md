# vanilla-db

> browser based database

[![NPM](https://img.shields.io/npm/v/vanilla-db.svg)](https://www.npmjs.com/package/vanilla-db) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save vanilla-db
```

## Usage

```jsx
import React, { Component, useState, UseEffect } from 'react'

import { vanillaDb } from 'vanilla-db'

const Example = e => {
  const [data, setData] = useState(null)

  const addData = e => {

    const config = {
      db: 'local' || 'session',
      key: 'data key',
      data: 'your data here'
    }

    vanillaDb.set(config)

  }

  useEffect(() => {

    const query = {
      db: 'local',  // 'session'
      key: 'data key'
    }

    let res = vanillaDb.get(query)
    setData(res)

  }, [])

  render() {
    return <yourComponent data={data} />
  }
}

```
Once the package is installed, you can import the library using `import`

```js
import { vanillaDb } from 'vanilla-db'
```

````

## License

MIT © [](https://github.com/)
