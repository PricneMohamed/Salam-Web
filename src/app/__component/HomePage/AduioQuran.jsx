"use client"
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

export default function AduioQuran() {
  const [scroll,setScroll] = useState(false)
  const scrolling = ()=>{
    if(window.scrollY >= 900){
      setScroll(true)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",scrolling)

    return ()=>window.removeEventListener("scroll",scrolling)
  },[])
  return (
    <motion.div
    initial={{opacity:"0",y:1000}}
    animate={
      scroll == true?{opacity:"1",y:0}:null
    }
    className='AduioQuran '>
        <div className='flex lg:justify-between  flex-row-reverse
        justify-center h-[70vh]
        gap-20
        p-4 flex-wrap'>
            <h1 className='lg:text-6xl md:text-4xl sm:text-5xl
        text-3xl
            '>تعرف علي قارئك المفضل </h1>
            <h3 className='text-3xl text-center lg:flex-1
            md:flex-1 w-[100%]
            '>ستتعرف علي هنا علي اجمل الاصوات الخاشعة في تلاوة القرأن</h3>
        </div>
    </motion.div>
  )
}
