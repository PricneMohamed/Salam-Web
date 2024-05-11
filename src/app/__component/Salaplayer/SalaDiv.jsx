"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import moment from "moment";
import { motion } from "framer-motion";
export default function SalaDiv() {
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [citydeFualit, setCitydefualt] = useState("Alexandria");
  const text = "مواقيت الصلاة اليوم";
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByAddress/10-05-2024?address=${citydeFualit}%2C+Egyptian%20General%20Authority%20of%20`
      );
      const data = await res.json();
      setCity(data.data.timings);
    })();
  }, [citydeFualit]);
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("LTS"));
    }, 1000);
  }, []);
  const timePlayer = () => {
    if (
      moment().isAfter(moment(city["Fajr"], "hh:mm")) &&
      moment().isBefore(moment(city["Dhuhr"], "hh:mm"))
    ) {
      return "الظهر";
    } else if (
      moment().isAfter(moment(city["Dhuhr"], "hh:mm")) &&
      moment().isBefore(moment(city["Asr"], "hh:mm"))
    ) {
      return "العصر";
    } else if (
      moment().isAfter(moment(city["Asr"], "hh:mm")) &&
      moment().isBefore(moment(city["Maghrib"], "hh:mm"))
    ) {
      return "المغرب";
    } else if (
      moment().isAfter(moment(city["Maghrib"], "hh:mm")) &&
      moment().isBefore(moment(city["Isha"], "hh:mm"))
    ) {
      return "العشاء";
    } else {
      return "الفجر";
    }
  };
  const h1variants = {
    hideen: {
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
    hideen: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="SalaDiv mb-20">
      <div className="flex flex-row-reverse flex-wrap justify-center gap-10 mt-10">
        <motion.h1
          initial={"hideen"}
          animate={"visible"}
          variants={h1variants}
          className="text-4xl text-center p-5 font-bold text-green-600"
        >
          {text.split("").map((ele, index) => {
            return (
              <motion.span variants={spanvariants} key={index}>
                {ele}
              </motion.span>
            );
          })}
        </motion.h1>
        <div className="w-[300px]">
          <label
            htmlFor="HeadlineAct"
            className="block text-sm font-medium text-gray-900"
          >
            {" "}
            الموقع{" "}
          </label>

          <select
            onChange={(e) => {
              setCitydefualt(e.target.value);
            }}
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          >
            <option value="Alexandria">اختار موقعك</option>
            <option value="Alexandria">الاسكندرية</option>
            <option value="Cairo">القاهرة</option>
          </select>
        </div>
      </div>
      <div className="w-[100%] flex lg:justify-between md:justify-between sm:justify-between justify-center p-10 flex-wrap flex-row-reverse">
        <div className="flex flex-col gap-10">
          <h1 className="lg:text-3xl md:text-3xl text-2xl p-4 ">
            المكان:{citydeFualit === "Alexandria" ? "الاسكندرية" : "القاهرة"}
          </h1>
          <h2 className="lg:text-3xl md:text-3xl text-2xl p-4 ">
            التاريخ: {moment().format("MMM Do YY")}
          </h2>
        </div>
        <div className="flex flex-col gap-10">
          <h1
            className="lg:text-3xl md:text-3xl text-2xl p-4"
            style={{ direction: "rtl" }}
          >
            الوقت: {time}
          </h1>
          <h2 className="lg:text-3xl md:text-3xl text-2xl p-4 ">
            الصلاة القادمة: {timePlayer()}
          </h2>
        </div>
      </div>
      <div className="cardSalaPlayer flex flex-wrap justify-evenly p-5 gap-10">
        <Card
          image={require("./img/wallpaperflare.com_wallpaper (1).jpg")}
          rak3a1="ركعتين"
          rak3a2="ركعتين  قبلها"
          name="الفجر"
          Sala={city.Fajr}
        />
        <Card
          image={require("./img/wallpaperflare.com_wallpaper (2).jpg")}
          rak3a1="4 ركعات"
          rak3a2="ركعتان قبلها وركعتان بعدها"
          name="الظهر"
          Sala={city.Dhuhr}
        />
        <Card
          image={require("./img/wallpaperflare.com_wallpaper (3).jpg")}
          rak3a1="4 ركعات"
          rak3a2="ركعتين قبلها"
          name="العصر"
          Sala={city.Asr}
        />
        <Card
          image={require("./img/wallpaperflare.com_wallpaper (4).jpg")}
          rak3a1="3 ركعات"
          rak3a2="ركعتين قبلها"
          name="المغرب"
          Sala={city.Maghrib}
        />
        <Card
          image={require("./img/wallpaperflare.com_wallpaper (5).jpg")}
          rak3a1="4 ركعات"
          rak3a2="ركعتان بعدها"
          name="العشاء"
          Sala={city.Isha}
        />
      </div>
    </div>
  );
}
