import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsDot } from 'react-icons/bs'
import { BiSolidDownArrow } from 'react-icons/bi'

import { motion } from 'framer-motion'

const Header = () => {
  const [bg,setBg]=useState(false)
  const [navbar,setNavbar]=useState('home')
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY>100){
        setBg(true)
       }else{
        setBg(false)
       }
    }
    window.addEventListener("scroll",handleScroll)
    return()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  },[])



  return (
    <header className={`fixed top-0 left-0 w-full flex justify-between items-center px-20 py-4 max-h-[75px] backdrop-blur-sm z-20 ${bg?"bg-white/5 shadow-lg":""}`}>
      <Logo className="flex w-60 items-center gap-3">
          <img
          className="w-12 h-12 rounded-full object-cover object-center" src="https://wallpaperset.com/w/full/2/c/1/450812.jpg" alt="" />
          <div>
            <h1 className="text-xl font-semibold text-slate-100 ">Misbahul<span className="text-red-500">Mu25!</span></h1>
            <h2 className="text-sm text-slate-300 font-bold">Front end Students</h2>
          </div>
      </Logo>
      <Navbar
      className="w-full max-w-sm">
          <ul
          className="flex justify-between bg-gradient-to-tr from-blue-800 to-cyan-400 rounded-full shadow">
            <motion.li
            initial={{ scale:6,translateX:"-120px",opacity:0 }}
            animate={{ scale:1,translateX:0,opacity:1 }}
            transition={{duration:1}}
            onClick={()=>setNavbar('home')}
            className="py-2 text-center h-full w-full z-10 group cursor-pointer">
              <Link className={`${navbar==="home"?"text-slate-50":"text-slate-300"} font-semibold group-hover:text-slate-50 transition-all duration-300`} to="/">Home</Link>
            </motion.li>
            <motion.li
            initial={{ scale:6,translateY:"-120px",opacity:0 }}
            animate={{ scale:1,translateY:0,opacity:1 }}
            transition={{duration:1}}
            onClick={()=>setNavbar('about')}
            className="py-2 text-center h-full w-full z-10 group cursor-pointer">
              <Link className={`${navbar==="about"?"text-slate-50":"text-slate-300"} font-semibold group-hover:text-slate-50 transition-all duration-300`} to="/about">About</Link>
            </motion.li>
            <motion.li
            initial={{ scale:6,translateY:"-120px" ,opacity:0}}
            animate={{ scale:1,translateY:0,opacity:1 }}
            transition={{duration:1}}
            className="py-2 relative text-center h-full w-full group cursor-pointer">
              <BiSolidDownArrow  className="absolute right-1.5 top-1/2 -translate-y-1/3 text-slate-300 text-xs group-hover:text-slate-100 group-hover:rotate-180 transition-all duration-100"/>
              <span className={`${navbar==="project"?"text-slate-50":"text-slate-300"} font-semibold group-hover:text-slate-50 transition-all duration-300`}>Project</span>
              <div className="absolute left-[-30px] top-[41px] -translate-y-[70%] opacity-0 flex flex-col w-40 bg-blue-700 rounded-b-md group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <Link className="text-slate-300 font-semibold text-start pl-2 py-2 hover:bg-blue-800 hover:text-slate-100 transition-all duration-500" to="/beginerProject">Beginer Project</Link>
                <Link className="text-slate-300 font-semibold text-start pl-2 py-2 hover:bg-blue-800 hover:text-slate-100 transition-all duration-500" to="/intermedietProject">Intermediet Project</Link>
                <Link className="text-slate-300 font-semibold text-start pl-2 py-2 rounded-b-md hover:bg-blue-800 hover:text-slate-100 transition-all duration-500" to="/advancedProject">Advanced Project</Link>
              </div>
            </motion.li>
            <motion.li
            initial={{ scale:6,translateX:"120px" ,opacity:0}}
            animate={{ scale:1,translateX:0,opacity:1 }}
            transition={{duration:1.2}}
            onClick={()=>setNavbar('contact')}
            className="py-2 text-center h-full w-full group cursor-pointer">
              <Link className={`${navbar==="contact"?"text-slate-50":"text-slate-300"} font-semibold group-hover:text-slate-50 transition-all duration-300`} to="/contact">Contact</Link>
            </motion.li>
          </ul>
      </Navbar>
      <Acoount className="flex w-72 justify-between items-center">
        <h1 className="text-lg flex items-center text-red-600">
          <BsDot className="text-blue-500 font-bold text-lg" />
         <span className="font-semibold">Available</span>
        </h1>
        <a 
        href="#" className="h-10 w-10 flex items-center bg-white/20 shadow-md justify-center rounded-full hover:bg-gradient-to-r from-red-600 via-[#fa7e1e] to-red-500 transition-all duration-150">
          <AiFillInstagram className="text-slate-100 text-3xl" />
        </a>
        <a
        href="#" className="h-10 w-10 flex items-center justify-center bg-white/20 shadow-md rounded-full hover:bg-green-600 transition-all duration-150">
          <RiWhatsappFill className="text-white text-3xl" />
        </a>
        <a
        animate={{scale:1}}
        href="#" className="h-10 w-10 flex items-center justify-center bg-white/20 shadow-md rounded-full hover:bg-blue-700 transition-all duration-150">
          <AiFillLinkedin className="text-white text-3xl"/>
        </a>
        <div></div>
      </Acoount>
    </header>
  )
}

export default Header

const Navbar=styled.nav``
const Logo=styled.div``
const Acoount=styled.div``