import React from 'react'
import { useParams } from 'react-router-dom'
import Word, { IWord } from './Word.tsx'
import useFetch from '../hooks/useFetch.ts'

const DayList = () => {
  const { day } = useParams<{ day: string }>()
  const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`)

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default DayList
