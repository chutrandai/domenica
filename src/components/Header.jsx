import React, { useState } from 'react'
import pizzalogo2 from "../assets/pizzalogo2.webp"
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import SideBar from './SideBar';

const Header = (props) => {

    return (
        <div className="headerdiv">
            <Link to="/"><img className='logo' src={pizzalogo2}></img></Link>
            <div className='links'>
                <Link to="/"><button className='linkbutton'>Home</button></Link>
                <Link to="/menu"><button className='linkbutton'>Menu</button></Link>
                <Link to="/about"><button className='linkbutton'>About</button></Link>
                <Link to="/contact"><button className='linkbutton'>Contact</button></Link>
            </div>

            {props.isSideBarClicked ?
                <SideBar SideBarClickedHandler={props.SideBarClickedHandler} isSideBarClicked={props.isSideBarClicked}></SideBar>
                :
                <button className='menu-icon' onClick={props.SideBarClickedHandler}><IoMenu /></button>
            }


        </div>
    )
}

export default Header