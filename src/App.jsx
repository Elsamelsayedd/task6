import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Components/Products/Products'
import Counter from './Components/Counter/Counter'
import LogIn from './Components/LogIn/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Products /> */}
      {/* <Counter /> */}
      <LogIn />
    </>
  )
}

export default App
