import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './features/Navigation/Navigation'
import './App.css'
import Home from './features/Home/Home'
import About from './features/About/About'
import Contact from './features/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
