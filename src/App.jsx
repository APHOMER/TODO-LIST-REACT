// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import './App.css'
import Navbar from './Navbar';

import TodoList from './Todolist';
import SimpleBottomNavigation from "./SimpleBottomNavigation";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Navbar />
      <h1>Helloooooooo</h1>
      <TodoList />
      {/* <TableFooter /> */}
      <SimpleBottomNavigation />
    </>
  )
}

export default App
