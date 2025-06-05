import { Contact } from 'lucide-react'
import './App.css'
import { About, Home, Pricing } from './components/Home/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      {/** Header */}
      <Header />
      <BrowserRouter>
      {/** Body */}
        <div className='min-h-screen w-full flex items-center justify-center content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </>
  )
}

export default App
