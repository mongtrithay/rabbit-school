import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonDonate from './companents/ButtonDonate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ButtonDonate />
    </>
  )
}

export default App
