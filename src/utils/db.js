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

  // EXA works
  set(config) {
    // query config to set data
    // db: 'database choice local or session',
    // key: 'database key', data: 'data to store
    const { db, key, data } = config

    // data can be number, string and object
    if (typeof data === 'object') {
      const s = {
        time: Date(),
        data,
        key
      }

      if (db === 'session') {
        CreateStore._sessionSet(key, JSON.stringify(s))
        return true
      } else if (db === 'local') {
        CreateStore._localSet(key, JSON.stringify(s))
        return true
      }
    } else {
      const s = {
        time: Date(),
        data,
        key
      }

      // data can be number, string and object
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

  static async _sessionSet(key, data) {
    sessionStorage.setItem(key, data)
  }

  static async _localSet(key, data) {
    localStorage.setItem(key, data)
  }

  // EXA
  remove(db, key) {
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
  sync(key) {
    // sync store session data to local storage
    const query = { db: 'session', key }
    const { data } = this.get(query)

    const config = {
      db: 'local',
      key,
      data
    }
    this.set(config)
    this.remove('session', key)
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

  secure(api) {
    // store user session during there stay in a app
    // return user hashed hash key and retrieve it
    // generate new key

    const _Gen = () => {
      const num = Math.floor(Math.random * 999)
      return Math.floor(Math.random * 9999999) * num
    }
    const hashedkey = _Gen()
    const data = {
      hashedkey,
      api
    }

    const config = {
      db: 'session',
      key: 'user-session',
      data
    }

    this.set(config)
    return {
      key: hashedkey
    }
  }

  // return the stored api key
  user() {
    const query = { db: 'session', key: 'user-session' }
    const { data } = this.get(query)
    if (data.hashedkey === key) {
      return {
        user: data.api
      }
    } else {
      return {
        user: null
      }
    }
  }
}
