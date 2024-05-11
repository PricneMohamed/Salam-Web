"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Banner() {
  const h1variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const spanvariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const text = "مرحبًا بك في سلام ويب";

  return (
    <section className="relative p-3 bg-[url(https://c4.wallpaperflare.com/wallpaper/552/88/969/mosques-sheikh-zayed-grand-mosque-wallpaper-preview.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <motion.h1
            variants={h1variants}
            initial={"hidden"}
            animate={"visible"}
            className="text-3xl font-extrabold sm:text-5xl text-white"
          >
            {text.split("").map((ele, index) => {
              return (
                <motion.span variants={spanvariants} key={index}>
                  {ele}
                </motion.span>
              );
            })}
            <strong
              className="block font-extrabold
        mt-3 text-green-400"
            >
              {" "}
              رحلة روحية في انتظارك{" "}
            </strong>
          </motion.h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            مرحبًا بكم في موقع سلام ويب، ملاذكم الأمثل لمتابعة مواقيت الصلاة
            واستكشاف أعماق القرآن الكريم وتفسير آياته. نوفر لكم هنا كل ما
            تحتاجونه لرحلة روحانية مليئة بالسكينة والمعرفة.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="/salaplayer"
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              مواقيت الصلوات
            </Link>

            <Link
              href="/tfceer"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
            >
              التفسير
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
