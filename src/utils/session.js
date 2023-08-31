import { CreateStore } from './db'
/* eslint-disable no-useless-constructor */
export class SessionManager extends CreateStore {
  constructor() {
    super()
  }

  manage(api) {
    // preconfig
    const preconfig = {
      api: 'api',
      options: {
        expire: 'onclose' // persist
      }
    }

    // store user session during there stay in a app
    // return user hashed hash key and retrieve it
    // generate new key
    const newkey = Math.floor(Math.random() * 9999999999999)

    const data = {
      key: newkey,
      api
    }

    const config = {
      db: 'session',
      key: 'user-session',
      data
    }

    this.set(config)
    return newkey
  }

  // return the stored api key
  user(newkey) {
    const query = {
      db: 'session',
      key: 'user-session'
    }

    const data = this.get(query)
    if (data.key === newkey) {
      return {
        api: data.api
      }
    } else {
      return {
        user: null
      }
    }
  }
}
