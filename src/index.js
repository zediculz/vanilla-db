/* eslint-disable no-undef */
import { useState, useEffect } from 'react'
import { CreateStore } from './utils/db.js'
export { Heading, Text } from './helpers/index.js'

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [url])

  return [data]
}

export const vanillaDb = new CreateStore()
