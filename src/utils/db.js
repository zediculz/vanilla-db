/* eslint-disable no-undef */

// local and session storage
// set, get local and session storage
// clear, length, removeItem
// sync

// set worked, get worked, sync
export class CreateStore {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  // EXA works
  set(type, opt) {
    const { key, data } = opt

    // data can be number, string and object
    if (typeof data === 'object') {
      const s = {
        time: Date(),
        data,
        key,
        isObj: true
      }
      if (type === 'session') {
        CreateStore._sessionSet(key, JSON.stringify(s))
        return true
      } else if (type === 'local') {
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
      if (type === 'session') {
        CreateStore._sessionSet(key, JSON.stringify(s))
        return true
      } else if (type === 'local') {
        CreateStore._localSet(key, JSON.stringify(s))
        return true
      }
    }
  }

  // EXA works
  get(type, key) {
    if (type === 'local') {
      // eslint-disable-next-line no-undef
      const res = localStorage.getItem(key)
      const { data } = JSON.parse(res)
      return {
        data
      }
    } else if (type === 'session') {
      const res = sessionStorage.getItem(key)
      const { data } = JSON.parse(res)
      return {
        data
      }
    }
  }

  static async _sessionSet(key, data) {
    sessionStorage.setItem(key, data)
  }

  static async _localSet(key, data) {
    localStorage.setItem(key, data)
  }

  // EXA
  clear(type, key) {
    if (type === 'local') {
      CreateStore._CLEANER('local', key)
    } else if (type === 'session') {
      CreateStore._CLEANER('session', key)
    }
  }

  static async _CLEANER(type, key) {
    if (type === 'local') {
      // eslint-disable-next-line no-undef
      localStorage.removeItem(key)
    } else if (type === 'session') {
      // eslint-disable-next-line no-undef
      sessionStorage.removeItem(key)
    }
  }

  /* EXA works */
  sync(key) {
    // the link that sync data if triggered
    // sync session data to local
    // get value thats linked with key and sync enabled
    // then call syncmanager to store in local

    const { data } = this.get('session', key)
    this.set('local', { key, data: data })
    this.clear('session', key)
    return true
  }

  // length of data EXA
  length(type) {
    if (type === 'local') {
      return localStorage.length
    } else if (type === 'session') {
      return sessionStorage.length
    }
  }

  secure(api) {
    // store user session during there stay in a app
    // return user hashed hash key and retrieve it
    // generate new key

    const hashedkey = 'sessionhashedkeyexample'

    const data = {
      hashedkey,
      api
    }

    this.set('session', { key: 'user-session', data })
    return {
      key: hashedkey
    }
  }

  // return the stored api key
  user(key) {
    const { data } = this.get('session', 'user-session')
    if (data.hashedkey === key) {
      return {
        api: data.api
      }
    }
  }
}
