"use client"
import React, { useEffect, useState } from "react";
import {motion} from "framer-motion";

export default function SalaPlayer2() {
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
    initial={{opacity:"0",y:60}}
    animate={
      scroll == true?{opacity:"1",y:0}:null
    }
    className="SalaPlayer2 h-[70vh] mt-10 flex items-center p-3 lg:justify-between
    md:justify-between sm:justify-center justify-center
    lg:gap-24
    md:gap-24 gap-0
    flex-wrap">
      <div className="text w-[400px] flex justify-center 
      items-center">
        <h1 className="lg:text-6xl md:text-6xl sm:text-5xl
        text-4xl
        ">مواقيت الصلاة</h1>
      </div>
      <div className="texting lg:flex-1 md:flex-1 sm:w-[700px] w-[600px]">
            <h1 className="lg:text-4xl flex-1 md:text-4xl sm:text-3xl
            text-2xl
            ">
            سوف تجد هنا جميع مواقيت الصلاة الخاصة بدولتك مع اختلاف مواقيت الصلوات
        بنسب تفاوت المحافظة او الولاية التي تعيش فيها
            </h1>
      </div>
    </motion.div>
  );
}
