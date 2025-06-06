import React from 'react'

import { MdCopyright } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footerdiv'>
            <div className='copyright'>
                <MdCopyright /><p>Premium Pizza Türkiye 2024. All rights reserved.</p>
            </div>
            <div className='socialmedia-icons'>
                <div className='icons-item'><FaInstagram/></div>
                <div className='icons-item'><FaTwitter/></div>
                <div className='icons-item'><FaFacebook/></div>
            </div>

        </div>
    )
}

export default Footer