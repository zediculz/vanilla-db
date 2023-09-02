
# VanillaDb

VanillaDb is a tiny browser-based database library that is built on Browser local and session Storage.
cookie (coming) and indexedDB (coming).

VanillaDb is built for developers that want to make use of Browser storage seamlessly when required in their projects.

## Installation
Install vanilla-DB using npm

```bash
  npm install --save vanilla-db
```

## Usage/Examples
Once the package is installed, you can import the library using import

```javascript
import { vanillaDb } from 'vanilla-db'

const config = {
  db: 'local' // 'session',
  key: 'your database key' ,
  data
}

vanillaDb.set(config)
```
config contains database which can either be "local" or "session", your database key and the data you want to store.

```javascript

const query = {
  db: 'local' // 'session',
  key: 'your database key',
}

vanillaDb.get(query)

```
query contains the database you stored your data and database key.

```javascript
import { vanillaDb } from 'vanilla-db'

const config = {
  from: 'local' // 'session',
  to: 'local' // 'session',
  key: 'your database key' ,
  options: {
      deleteOld: true // or false,
      newKey: 'synced data new key'
  }
}

vanillaDb.sync(config)
```
config contains the from, database you can are syncing from which can either be local or session, to, is the new database you are syncing to, key is the key of the database you want to sync.

options contains deleteOld which can either be true or false to delete old stored data, and newKey for the data synced.


```javascript

const query = {
  db: 'local' // 'session',
  key: 'your database key',
}

vanillaDb.remove(query)

```
query contains the database you stored your data and the key of the databsse you want to remove.

## More Features

- length(db) - return the length of data stored in Database
- request(db) - fetch data from api (mostly get) and store the data in database for offline usage.

### Usage/Examples

```javascript
import { vanillaDb } from 'vanilla-db'

const db =  'local' // 'session',

vanillaDb.length(db)

```
db is the Database you stored data.

```javascript
import { vanillaDb } from 'vanilla-db'

const config =  {
    url: 'api endpoint',
    db: 'local' // 'session',
    key: 'database key',
    options: {'fetch request options'}
}

vanillaDb.request(db)

```
db is the Database you stored data.


[![NPM](https://img.shields.io/npm/v/vanilla-db.svg)](https://www.npmjs.com/package/vanilla-db) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## License

MIT © [](https://github.com/)
