import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Landing } from './components/Landing'
import { Room } from './components/Room'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/room' element={<Room />}></Route>

        <Route path='/' element={<Landing />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
