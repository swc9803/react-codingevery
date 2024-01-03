import React from 'react'
import Header from './components/Header'
import DayList from './components/DayList'
import Day from './components/Day'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <DayList />
      <Day />
    </div>
  )
}

export default App
