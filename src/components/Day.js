import React from 'react'
import dummy from '../db/data.json'

const DayList = () => {
  const wordList = dummy.words.filter(word => (
    word.day === 1
  ))

  return (
    <>
      <table>
        <tbody>
          {wordList.map(word => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default DayList
