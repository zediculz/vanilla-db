
# VanillaDb

VanillaDb is a fast and lightweight browser-based database library that work seemelessly with all browsers localStorage and sessionStorage

VanillaDb is built for developers that want to make use of Browser storage seamlessly when required in their projects.

work seemlessly with all frontend libraries.

## Installation
```bash
  npm install --save vanilla-db@latest
```
Once the package is installed, you can import the library using import

### Store Data
to store data using vanillaDb create an object containing
db:  which can either be "local || localStorage" or "session || sessionStorage" 
key: database key
data: data you want to store.

```javascript
import { vanillaDb } from 'vanilla-db'

const config = {
  db: 'local' // 'session',
  key: 'my-data' ,
  data: {
    name: 'John Doe',
    age: 34
  }
}

vanillaDb.set(config)
```


### Get Data

to Get your data using vanillaDb call the get and pass an object that contains 
db: db you stored your data 
key: database key.

```javascript
const query = {
  db: 'local' // 'session',
  key: 'my-data',
  option: 'all' || 'only'
}

vanillaDb.get(query)

```
you can also pass option to either return all the Database or only the data stored.

### Sync Data
copy(sync) allow you to copy or move data within sessionStorage and localStorage, 
to use copy(sync) create config object that contains 

from: the database you can are copying/syncing which can either be local or session, 
to: the new database you are copying/syncing to
key: the key of the database you want to copy/sync.

options contains 
deleteOld: which can either be true or false to delete old stored data
newKey: for the new data synced.

```javascript
import { vanillaDb } from 'vanilla-db'

const config = {
  from: 'local',
  to: 'session',
  key: 'my-data' ,
  options: {
      deleteOld: true // or false,
      newKey: 'my-synced-data'
  }
}

vanillaDb.sync(config)
```

## More Features
- remove(db) - remove the data stored in Database
- length(db) - return the length of data stored in Database
- request(db) - fetch data from api (mostly get) and store the data in database for offline usage.

### Usage/Examples
```javascript

const query = {
  db: 'local' // 'session',
  key: 'your database key',
}

vanillaDb.remove(query)

```
query contains the database you stored your data and the key of the databsse you want to remove.

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

vanillaDb.request(config)

```
db is the Database you stored data.


[![NPM](https://img.shields.io/npm/v/vanilla-db.svg)](https://www.npmjs.com/package/vanilla-db) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)

## License

MIT © [@zediculz](https://github.com/@zediculz)
