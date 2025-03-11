import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/home'
import Navbar from './Components/navbar'
import Services from './Components/services'
import Event from './Components/event'
import About from './Components/about'
import News from './Components/news'
import Contact from './Components/contact'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Dashboard from './Components/dashboard'
import Profile from './Components/profile'
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/events' element={<Event />} />
          <Route path='/about' element={<About />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
