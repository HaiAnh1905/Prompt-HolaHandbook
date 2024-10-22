import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './navbar'
import './App.css'
import HomePage from './homepage/index.tsx'
import LoginPage from './login/index.tsx'
import SignUpPage from './signup/index.tsx'
import FPTU from './fptu/index.tsx'
import Reset from './forget/reset.tsx'

function App() {

  return (
    <>
      <div className="container">
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/fptu' element={<FPTU />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<SignUpPage />}></Route>
          <Route path='/reset' element={<Reset />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
