/* eslint-disable react/prop-types */
import { React, useState } from 'react'
import UserName from './UserName.js'

export default function Hello ({ age }) {
  const [name, setName] = useState('Mike')
  const msg = age > 19 ? '성인' : '미성년자'

  return (
    <>
      <h1>hello components</h1>
      <p>{name} ({age}) : {msg} </p>
      <UserName name={name} />
      <button onClick={() => {
        setName(name === 'Mike' ? 'Jane' : 'Mike')
      }}>
        Change name
      </button>
    </>
  )
}
