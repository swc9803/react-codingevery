import React from 'react'
import World from './World.js'
import styles from './Hello.module.css'

export default function Hello () {
  return (
    <>
      <p>hello components</p>
      <World/>
      <div className={styles.box}>hello</div>
    </>
  )
}
