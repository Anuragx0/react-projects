import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvicer'
import Login from './Components/login'
import Profile from './Components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>
        Hiiii!!!! This side Anurag😎... Yours!!!!
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
