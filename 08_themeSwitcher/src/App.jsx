import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import { ThemeContextProvider, ThemeContext } from './context/ThemeContext'
import usetheme from './context/ThemeContext'
import { Card, ThemeBtn } from './components'

function App() {
const [themeMode , setThemeMode] = useState("light")

const darkTheme = () =>{
  setThemeMode("dark")
}

const lightTheme = () => {
  setThemeMode("light")
}

// actual Theme Changer

useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode , darkTheme , lightTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeContextProvider>
  )
}

export default App
