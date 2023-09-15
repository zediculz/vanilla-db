/* eslint-disable no-undef */
import { CreateStore } from './utils/db.js'
import { SessionManager } from './utils/session.js'

const vanillaDb = new CreateStore()
const vanillaAuth = new SessionManager()


export { vanillaDb, vanillaAuth }
