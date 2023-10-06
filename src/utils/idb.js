/* eslint-disable no-undef */
// start a db
// create an object inside the db
// set and get data stored inside the db objects

export class CreateiStore {
  // eslint-disable-next-line no-useless-constructor
  constructor() { }

  // create db
  // with db name and version
  // object name
  // create db, crate object all from schema
  create(schema) {
    const preschema = {
      db: 'database',
      version: 'version',
      object: 'object'
    }

    this.schema = schema
    const { db, version, object } = schema
    const _DB = indexedDB.open(db, version)

    _DB.onerror = (err) => console.error('error', err)

    _DB.onupgradeneeded = (e) => {
      const { name, config } = object
      const db = e.target.result
      db.createObjectStore(name, config)
    }

    _DB.onsuccess = (e) => {
      this._DB = e
    }
  }

  // set data by inserting data into db objects
  set(name, data) {
    this._DB.onsuccess = (e) => {
      const _db = e.target.result
      const txn = _db.transaction(name, 'readwrite')
      const store = txn.objectStore(name)
      const q = store.put(data)

      q.onsuccess = function (e) {
        return true
      }

      q.onerror = function (e) {
        console.log('Error', e)
      }

      txn.oncomplete = function () {
        _db.close()
      }
    }
  }

  get(name, id, cb) {
    this._DB.onsuccess = (e) => {
      const _db = e.target.result
      const txn = _db.transaction(name, 'readonly')
      const store = txn.objectStore(name)
      const q = store.get(id)

      q.onsuccess = function (e) {
        cb(e.target.result)
      }

      q.onerror = function (e) {
        cb(e)
      }

      txn.oncomplete = function () {
        _db.close()
      }
    }
  }
}
