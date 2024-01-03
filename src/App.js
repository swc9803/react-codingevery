import React from 'react'
import Header from './components/Header'
import DayList from './components/DayList'
import Day from './components/Day'
import EmptyPage from './components/EmptyPage.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="*" element={<EmptyPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
