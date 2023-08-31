/* eslint-disable no-useless-constructor */
/* eslint-disable constructor-super */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// set, get, remove, update, length, sync

// preconfig
const config = {
  db: 'local',
  key: 'data',
  data: 'your data here'
}

// query
const query = {
  db: 'local',
  key: 'data'
}

export class CreateStore {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  // work
  set(config) {
    // query config to set data
    // db: 'database choice local or session',
    // key: 'database key', data: 'data to store
    const { db, key, data } = config

    // data can be number, string and object
    if (typeof data === 'object') {
      const s = {
        date: Date(),
        data,
        key,
        object: true
      }

      if (db === 'session') {
        CreateStore._sessionSet(key, JSON.stringify(s))
        return true
      } else if (db === 'local') {
        CreateStore._localSet(key, JSON.stringify(s))
        return true
      }
    } else {
      // data can be number, string and object
      const s = {
        date: Date(),
        data,
        key,
        object: false
      }

      if (db === 'session') {
        CreateStore._sessionSet(key, JSON.stringify(s))
        return true
      } else if (db === 'local') {
        CreateStore._localSet(key, JSON.stringify(s))
        return true
      }
    }
  }

  // EXA works
  get(query) {
    // query config to get data
    // db: 'database choice local or session', key: 'database key'
    const { db, key } = query

    if (db === 'local') {
      const res = localStorage.getItem(key)
      const { data } = JSON.parse(res)
      return data
    } else if (db === 'session') {
      const res = sessionStorage.getItem(key)
      const { data } = JSON.parse(res)
      return data
    }
  }

  static _sessionSet(key, data) {
    sessionStorage.setItem(key, data)
  }

  static _localSet(key, data) {
    localStorage.setItem(key, data)
  }

  // EXA
  remove(query) {
    // remove preconfig
    const preconfig = {
      db: 'db',
      key: 'key'
    }
    const { db, key } = query
    if (db === 'local') {
      CreateStore._CLEANER('local', key)
    } else if (db === 'session') {
      CreateStore._CLEANER('session', key)
    }
  }

  static _CLEANER(type, key) {
    if (type === 'local') {
      localStorage.removeItem(key)
    } else if (type === 'session') {
      sessionStorage.removeItem(key)
    }
  }

  /* EXA */
  sync(config) {
    // preconfig
    const preconfig = {
      from: 'session',
      to: 'local',
      key: 'key',
      options: {
        deleteOld: true,
        newKey: 'new-key'
      }
    }
    // sync config
    const { from, to, key, options } = config
    const { newKey, deleteOld } = options
    // sync store session data to local storage
    // ability to sync back and forth
    const query = { db: from, key }
    const data = this.get(query)

    const _config = {
      db: to,
      key: newKey === '' || null ? key : newKey,
      data
    }
    this.set(_config)
    if (deleteOld) {
      this.remove(from, key)
    }
    return true
  }

  // length of data EXA
  length(db) {
    if (db === 'local') {
      return localStorage.length
    } else if (db === 'session') {
      return sessionStorage.length
    }
  }

  request(config) {
    // make request to get a data most get request, storage the data in db like caching
    // preconfig
    const preconfig = {
      url: 'local',
      db: 'local', // session,
      key: 'data',
      options: {
        // fetch options
      }
    }

    const { url, db, key, options } = config

    fetch(url)
      .then((res) => res.json())
      .then(async (data) => {
        const _config = {
          db,
          key,
          data
        }

        this.set(_config)
      })
  }
}
