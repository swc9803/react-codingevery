import { React, useState } from 'react'
import styles from './Hello.module.css'

export default function Hello () {
  const [name, setName] = useState('Mike')

  const changeName = () => {
    const newName = name === 'Mike' ? 'Jane' : 'Mike'
    setName(newName)
  }

  return (
    <div className={styles.wrapper}>
      <h1>hello components</h1>
      <p>{name}</p>
      <button onClick={changeName}>Change name</button>
    </div>
  )
}
