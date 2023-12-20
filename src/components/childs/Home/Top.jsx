import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Top = () => {
  return (
    <TopHome className="relative h-screen pt-[80px] px-60 bg-background-White bg-cover bg-center">
       <motion.div 
       initial={{opacity:0}}
       animate={{x:[200,0],opacity:1}}
       transition={{duration:1}}
       className="mt-16">
        <h1 className="text-6xl font-bold text-blue-50 uppercase">Front end developer</h1>
        <h2 className="mt-3 text-[42px] ml-12 font-semibold text-blue-100 uppercase"><span className="text-purple-800 font-bold">React</span> From <span className="font-bold text-orange-500">Misbahul <span className="text-red-500">Muttaqin</span></span></h2>
        <p className="mt-2 px-5 text-slate-50 text-xl first-letter:text-3xl first-letter:font-semibold tracking-wider leading-8 text-justify">
            Hallo perkenalkan nama saya <span className="text-green-400 font-semibold">Misbahul Muttaqin</span>, saya berasal dari Jawa Timur yang lebih tepatnya daerah <span className="text-red-600 font-semibold">Gresik</span>. Saat ini fokus saya adalah belajar untuk Front End developer dan belajar untuk test masuk perguruan tinggi.
        </p>
       </motion.div>
        <div className="py-4">
            <a href="#" className="text-lg px-8 py-2.5 mr-4 rounded-lg bg-orange-600 text-blue-100 font-semibold hover:bg-orange-500 hover:shadow-xl transition-all duration-200">
                Read More
            </a>
            <button className="bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-lg ring-red-700 hover:ring-[1px] text-blue-800 font-bold text-lg  hover:bg-blue-700 hover:text-blue-50 hover:shadow-2xl transition-all duration-500">Contact Me</button>
        </div>
    </TopHome>
  )
}

 const TopHome=styled.div``