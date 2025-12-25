import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div style={{backgroundColor : color}} className='bg-olive text-2xl h-screen w-full flex items-center justify-center flex-col'>
        <div>
          <h1 className='text-center text-white font-bold text-5xl'>Background Changer</h1>
          <div className='flex gap-5'>
            <button
            onClick={() => {setColor("black")}}
            
            type="button"
            className="mt-9 min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-black text-white"
          >
            black
          </button>
            <button
            onClick={() => {setColor("red")}}
            
            type="button"
            className="mt-9 min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-red-700 text-white"
          >
            red
          </button>
            <button
            onClick={() => {setColor("gray")}}
            
            type="button"
            className="mt-9 min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-900 text-white"
          >
            gray
          </button>
            <button
            onClick={() => {setColor("pink")}}
            
            type="button"
            className="mt-9 min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-pink-700 text-white"
          >
            pink
          </button>
            <button
            onClick={() => {setColor("green")}}
            
            type="button"
            className="mt-9 min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-green-700 text-white"
          >
            green
          </button>
            <button
            onClick={() => {setColor("purple")}}
            
            type="button"
            className="mt-9 min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-purple-700 text-white"
          >
            purple
          </button>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
