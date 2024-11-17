import React from 'react'
import logo from '../assets/logo.png'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6' >
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt='logo' className='mx-2 h-20 w-20'/>
        </div>
        <div className='m-100 flex items-center justify-center gap-4'>
        <FaLinkedin
  onClick={() => window.open("https://www.linkedin.com/in/ravi-shanker-64382426b", "_blank")}
  className="cursor-pointer"
/>
            <FaGithub
            onClick={()=> window.open("https://github.com/rav6239")}
            className='cursor-pointer'
            />
            <FaSquareXTwitter
            onClick={()=> window.open("https://x.com/?lang=en")}
            className='cursor-pointer'/>
            <FaInstagram
            onClick={()=> window.open("https://www.instagram.com/rvi_shnker/profilecard/?igsh=MXBlczA2NXkxb2tuZQ==")}
            className='cursor-pointer'
            />
        </div>

    </nav>
  )
}
