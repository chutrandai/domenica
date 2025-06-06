import React from 'react'

import { MdCopyright } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footerdiv'>
            <div className='copyright'>
                <MdCopyright /><p>Domenica Napoli Pizza and Pasta.</p>
            </div>
            <div className='socialmedia-icons'>
                <div className='icons-item'><FaInstagram/></div>
                <div className='icons-item'><FaTwitter/></div>
                <div className='icons-item'><FaFacebook onClick={() => {window.open('https://www.facebook.com/people/Domenica-Napoli-Pizza-and-Pasta/61576853903198/', '_blank');}}/></div>
            </div>

        </div>
    )
}

export default Footer