// helpers components
// are topography components that makes creating semantics web component easy and stress

import React from 'react'
import styles from '../styles.module.css'

export const Text = ({ text }) => {
  return <p className={styles.p}>{text}</p>
}

export const Heading = ({ text, type }) => {
  switch (type) {
    case 'h1':
      return <h1 className={styles.h}>{text}</h1>
    case 'h2':
      return <h2 className={styles.h}>{text}</h2>
    default:
      return <h1 className={styles.h}>{text}</h1>
  }
}
