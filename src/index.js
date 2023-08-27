/* eslint-disable no-undef */
import { CreateStore } from './utils/db.js'
import { DB } from './utils/idb.js'

// set, get, sync, remove, length
export const vanillaDb = new CreateStore()
export const vanillaDB = new DB()
