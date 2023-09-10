/* eslint-disable no-undef */
import { CreateStore } from './utils/db.js'
import { SessionManager } from './utils/session.js'

// set(config),
// get(query),
// sync(config),
// remove(db, key),
// length(db)
// request
const vanillaDb = new CreateStore()

// auth(api)
// user(key)

const vanillaAuth = new SessionManager()

// indexedDb
// set(config),
// get(query),
// code is broken
// const Db = new CreateiStore()

export { vanillaDb, vanillaAuth }
