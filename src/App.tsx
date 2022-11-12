import React from 'react'
import './App.css'
import Arts from "./components/Arts"
import { Art } from "./types";

const arts: Art[] = [
  { id: 27992, disabled: false },
  { id: 27998, disabled: false },
  { id: 27999, disabled: false },
  { id: 27997, disabled: false },
  { id: 27993, disabled: false },
]
const App = () => {
  return (
    <div className="App">
      <Arts arts={arts}/>
    </div>
  )
}

export default App

