import { React } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch.ts'

const CreateDay = () => {
  const days = useFetch('http://localhost:3001/days')
  const navigate = useNavigate()

  const addDay = (e) => {
    e.preventDefault()

    fetch('http://localhost:3001/days/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        day: days.length + 1
      })
    })
      .then(res => {
        if (res.ok) {
          alert('생성 완료')
          navigate('/')
        }
      })
  }

  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
  )
}

export default CreateDay
