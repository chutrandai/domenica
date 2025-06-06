import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='homediv'>
     <h1 className='title'>Premium Pizza</h1>
     <h3 className='info'>Delicious Pizzas <br /> with special spicy mixed</h3>
     <Link to="/menu"><button className='orderlinkbutton'>Order</button></Link>
    </div>
  )
}

export default Home