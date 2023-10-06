/* eslint-disable no-useless-constructor */
/* eslint-disable constructor-super */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { gen, generate } from '../asm/index'
// set, get, remove, update, length, sync, request
export class CreateStore {
   // eslint-disable-next-line no-useless-constructor
   constructor() {}

   // work 0.1.2
   set(config) {
      // config to set data
      // db: 'database choice local or session', key: 'database key', data: 'data to store
      const { db, key, data } = config
      // data can be number, string and object
      const src = {
         data,
         key,
         lastUpdated: new Date().toDateString(),
         type: [typeof data],
         Ox: gen()
      }

      if (db === 'session' || db === 'sessionStorage') {
         CreateStore._sessionSet(key, JSON.stringify(src))
         return true
      } else if (db === 'local' || db === 'localStorage') {
         CreateStore._localSet(key, JSON.stringify(src))
         return true
      }
   }

   // works 0.1.2
   get(query) {
      // query to get data
      // db: 'database choice local or session', key: 'database key'
      const { db, key, option } = query
      // const _option = "all" || "only"

      if (db === 'local' || db === 'localStorage') {
         const res = localStorage.getItem(key)
         const _res = JSON.parse(res)
         const { data } = _res

         if (CreateStore.getOPT(option)) {
            return _res
         }

         return data
      } else if (db === 'session' || db === 'sessionStorage') {
         const res = sessionStorage.getItem(key)
         const _res = JSON.parse(res)
         const { data } = _res
         if (CreateStore.getOPT(option)) {
            return _res
         }

         return data
      } else {
         console.error(`Error: DB Error:${db} is not correct`)
      }
   }

   static _sessionSet(key, data) {
      sessionStorage.setItem(key, data)
   }

   static _localSet(key, data) {
      localStorage.setItem(key, data)
   }

   static getOPT(option) {
      if (option === 'all') {
         return true
      } else if (option === 'only') {
         return false
      } else if (option === undefined || option === null) {
         return false
      } else {
         console.error(`Error: OPTION Error:${option}: all || only`)
      }
   }

   // work 0.0.4
   remove(query) {
      // remove preconfig
      // db: 'database choice local or session', key: 'database key'
      const { db, key } = query
      if (db === 'local' || db === 'localStorage') {
         localStorage.removeItem(key)
      } else if (db === 'session' || db === 'sessionStorage') {
         sessionStorage.removeItem(key)
      }
   }

   // work 0.0.4
   sync(config) {
      // sync config
      // from: 'database to sync from, to: database to sync data to, key: 'database key', options: 'to delete the old data and set new key if neccessary'
      const { from, to, key, options } = config
      const { newKey, deleteOld } = options
      // sync store session data to local storage
      // ability to sync back and forth
      const query = { db: from, key }
      const data = this.get(query)

      const _config = {
         db: to,
         key: newKey === '' || newKey === null ? key : newKey,
         data
      }
      this.set(_config)
      if (deleteOld) this.remove(query)
      return true
   }

   // length of data work 0.0.4
   length(db) {
      if (db === 'local' || db === 'localStorage') {
         return localStorage.length
      } else if (db === 'session' || db === 'sessionStorage') {
         return sessionStorage.length
      }
   }

   request(config) {
      // make request to get a data most get request, storage the data in db like caching
      // preconfig
      // db: 'database choice local or session', key: 'database key', url: 'api link to fetch data mostly get', options: 'fetch options if neccessary'
      const { url, db, key, option } = config

      fetch(url, option)
         .then((res) => res.json())
         .then((data) => {
            const _config = {
               db,
               key,
               data
            }

            this.set(_config)
         })
   }

   auth(auth) {
      // store user session during there stay in a app
      // return user hashed hash key and retrieve it
      // generate new key
      const newkey = generate()
      const data = {
         key: newkey,
         auth
      }

      const config = {
         db: 'session',
         key: 'Ox-auth',
         data
      }

      this.set(config)
      return newkey
   }

   user(newkey) {
      const query = {
         db: 'session',
         key: 'Ox-auth'
      }

      const data = this.get(query)
      const { api, key } = data
      if (key === newkey) return api
      return null
   }
}
