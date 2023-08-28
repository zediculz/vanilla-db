

# VanillaDB

VanillaDB is a tiny browser-based database library that is built on localstorage, sessionStorage and indexedDB.

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
  key: 'your database key',
  data
}

vanillaDb.set(config)
```
config contains your database of choice which can either be "local" or "session", your database key and the data you intended to store in the DB.

```javascript 

const query = {
  db: 'local' // 'session',
  key: 'your database key',
}

vanillaDb.get(query)

```
query contains the Database you stored data in and the database key.


## More Features

- sync(key) - sync data stored in session to local Database
- remove(db, key) - remove stored data by key
- length(db) - return the length of data stored in Database


### Usage/Examples

```javascript
import { vanillaDb } from 'vanilla-db'

vanillaDb.sync(key)
```
where key is the key of the data stored in Database

```javascript 

const db =  'local' // 'session',
const key = 'your database key',

vanillaDb.remove(db, key)

```
db is the Database you stored data in and the database key.

```javascript 

const db =  'local' // 'session',

vanillaDb.length(db)

```
db is the Database you stored data.


[![NPM](https://img.shields.io/npm/v/vanilla-db.svg)](https://www.npmjs.com/package/vanilla-db) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## License

MIT © [](https://github.com/)
