/* eslint-disable prettier/prettier */
import { CreateStore } from './db.js'
import { generate } from '../asm/index.js'

/* eslint-disable no-useless-constructor */
export class SessionManager extends CreateStore {
  constructor() {
    super()
  }

  init(api) {
    // store user session during there stay in a app
    // return user hashed hash key and retrieve it
    // generate new key
    const newkey = generate()

    const data = {
      key: newkey,
      api
    }

    const config = {
      db: 'session',
      key: 'user-auth',
      data
    }

    this.set(config)
    return newkey
  }

  // return the stored api key
  user(newkey) {
    const query = {
      db: 'session',
      key: 'user-auth'
    }

    const data = this.get(query)
    const { api, key } = data 
    if (key === newkey) return api 
    return null
  }
}
