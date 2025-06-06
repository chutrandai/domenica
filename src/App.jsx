import Header from "./components/Header"
import Footer from "./components/Footer"

import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import About from "./pages/About"
import Contact from "./pages/Contact"

import "./App.css"

import { useState } from "react";

function App() {

  const [isSideBarClicked, setIsSideBarClicked] = useState(false);

  const SideBarClickedHandler = () => {
    setIsSideBarClicked(!isSideBarClicked)
  }
  return (
    <div className={isSideBarClicked ? "sidebar-open" : ""} >
      <BrowserRouter>
        <Header SideBarClickedHandler={SideBarClickedHandler} isSideBarClicked={isSideBarClicked}></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  )
}

export default App
