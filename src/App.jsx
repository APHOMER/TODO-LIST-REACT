import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from "@mui/material/CssBaseline";
import './App.css'
import Navbar from './Navbar';

import TodoList from './Todolist';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Navbar />
      {/* <h1>Helloooooooo</h1> */}
      <TodoList />
    </>
  )
}

export default App
