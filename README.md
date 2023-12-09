# VanillaDb

VanillaDb is a lightweight browser database library thats built on top of localStorage and sessionStorage.
VanillaDb work seemlessly with all javascript frontend libraries.


## Installation
```bash
  npm install --save vanilla-db@latest
```
Once the package is installed, you can import the library using import vanillaDb

```javascript
import { vanillaDb } from 'vanilla-db'

```

## Documentation
### Storing Data 

to store data using vanillaDb create an object with
key: Database key,
db:  which can either be "local || localStorage" or "session || sessionStorage" 
data: the data you are storing (which can be arrays, object, or just a variable or state).

```javascript
import { vanillaDb } from 'vanilla-db'

const config = {
  db: 'local', // or 'session', 'localStorage', 'sessionStorage',
  key: 'my-database-key' ,
  data: {
    name: 'John Doe',
    age: 40,
    role: 'React Developer'
  }
}

vanillaDb.set(config)
```
VanillaDb uses key-value pair method in storing datas, you will be able to get the stored data by referencing its database key.


### Getting Data 

to Get stored data, call the get() method and pass an object with
db: the database data is stored
key: database key.

```javascript
const query = {
  db: 'local', // or 'session', 'localStorage', 'sessionStorage',
  key: 'my-database-key',
  option: 'all' || 'only'
}

vanillaDb.get(query)

```
you can also pass option to either return all the Database or only the data stored.


### Sync Data
sync(copy) allow you to copy or move data within sessionStorage and localStorage, 
to use sync(copy) create an object with

from: the database you can are copying/syncing data from, 
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
query contains the database you stored your data and the key of the database you want to remove.

```javascript
import { vanillaDb } from 'vanilla-db'

const db =  'local' // 'session',

vanillaDb.length(db)

```
db is the Database you stored data or the Database you which to know its length.

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


[![NPM](https://img.shields.io/npm/v/vanilla-db.svg)](https://www.npmjs.com/package/vanilla-db) 

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Contact](https://img.shields.io/badge/contact-@zediculz-blue.svg?style=flat&logo=twitter)](https://twitter.com/zediculz)

## License

MIT ©