import { useState, useCallback, useRef, useEffect, use } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordref = useRef(null)

  const passwordGenrator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_-+={}[]`~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,20);
    // line to copy text to clipboard
    window.navigator.clipboard.writeText(password);
  } , [password])

  useEffect(() => {
    passwordGenrator()
  }, [length, numAllowed, charAllowed])


  return (
    <>
      <div className='text-xl h-full w-full flex items-center justify-center'>
        <div className='h-80 w-200 rounded-xl bg-blue-500 mt-[10vh] p-[5vh] '>
          <h1 className='text-4xl text-center mt-[5vh] mb-[5vh] text-green-500'>Password Genrator</h1>
          <div className="flex flex-col bg-white shadow rounded-lg overflow-hidden p-3 mb-4" >
            <div className='flex text-xl gap-1 mb-4'>
              <input
              type="text"
              value={password}
              className="outline-none bg-gray-300 rounded-xl w-full py-1 px-3"
              placeholder='password'
              readOnly
              ref={passwordref}
            />
            <button
              onClick={copyPasswordToClipboard}
              className='outline-none rounded-xl bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>
            </div>

            <div className='text-xl flex gap-3 text-sm gap-x-2'>
              <div className='flex  items-center gap-x-1'>
                <input 
                type="range"
                min={6}
                max={16}
                value={length}
                className='cursor-pointer ml-2 mr-2'
                onChange={(e) => {setLength(e.target.value)}}
                />
                <label className='ml-2 mr-2'>Length: {length}</label>

                <input 
                type="checkbox" 
                id='numberinput'
                className='ml-2'
                onChange={() => {
                  setNumAllowed((prev) => !prev)
                }}
                />
                <label className='mr-2' htmlFor="numberInput">Numbers</label>

                <input 
                type="checkbox" 
                id='charinput'
                className='ml-2'
                onChange={() => {
                  setcharAllowed((prev) => !prev)
                }}
                />
                <label htmlFor="charInput">Characters</label>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
