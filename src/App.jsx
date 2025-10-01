import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookCard from './components/BookCard/BookCard'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home />} />       
      <Route path="/auth" element={<Auth />} />  
    </Routes>
    </>
  )
}

export default App
