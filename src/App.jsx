import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Sign from './components/Sign/Sign'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='sign' element={<Sign />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App