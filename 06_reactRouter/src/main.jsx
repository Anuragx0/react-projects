import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import App from './App'
import Home from './components/home/home'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Github from './components/Github/github.jsx'
import User from './components/User/user.jsx'


// const router= createBrowserRouter([
//   {
//     path:'/',
//     element: <App />,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element: <Contact />
//       },
//       {
//         path:'github',
//         element:<github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/github' element={<Github />} />
        <Route path = '/user:userid'  element = {<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
