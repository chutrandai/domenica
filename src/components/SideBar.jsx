import React from 'react'

import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <div>
            {
                props.isSideBarClicked ?
                    <div className='sidebardiv'>
                        <FaWindowClose className='close-icon' onClick={props.SideBarClickedHandler}></FaWindowClose>
                        <div className='sidebar-items'>
                            <Link to="/"><button className='sidebar-item'>Home</button></Link>
                            <Link to="/menu"><button className='sidebar-item'>Menu</button></Link>
                            <Link to="/about"><button className='sidebar-item'>About Us</button></Link>
                            <Link to="/contact"><button className='sidebar-item'>Contact Us</button></Link>
                        </div>

                    </div>
                    :
                    ""
            }
        </div>
    )

}

export default SideBar