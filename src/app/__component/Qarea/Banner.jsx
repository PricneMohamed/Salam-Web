"use client"
import React from "react";
import {motion} from "framer-motion";

export default function Banner() {
  const text = "مرحبا بك في قسم القراءة"
  const h2variants={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition:{
        staggerChildren:0.2
      }
    }
  }
  const spanvariants={
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
    }
  }
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <motion.h2
          variants={h2variants}
          initial={"hidden"}
          animate={"visible"}
          className="text-2xl font-bold text-gray-900 md:text-3xl">
              {text.split("").map((ele,index)=>{
                return(
                  <motion.span
                  variants={spanvariants}
                  key={index}>
                    {ele}
                  </motion.span>
                )
              })}
          </motion.h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            مرحبا ايها المسلم سوف تجد هناك جميع القرأة بالاصوات الجميلة الخاشعة
            لقرأة القرأن بأفضل الاصوات و بالتلاوة الصحيحة
          </p>

          <div className="mt-4 md:mt-8">
            <button
            onClick={
              ()=>{
                window.scrollTo({
                  top:400,
                  behavior:"smooth"
                })
              }
            }
              className="inline-block rounded bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              ابدء القراءة 
            </button>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="https://c0.wallpaperflare.com/preview/935/577/300/quran-faith-islamic-muslim.jpg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
}
