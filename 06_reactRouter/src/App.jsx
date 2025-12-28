import Header from './components/header/header'
import { Outlet } from 'react-router'
import Footer from './components/footer/footer'

function App() {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
