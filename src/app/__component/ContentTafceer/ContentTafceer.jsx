"use client";
import { tfceerFetching } from "@/app/rtk/tafceer";
import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

export default function ContentTafceer() {
  const dispatch = useDispatch();
  const tafceer = useSelector((state) => state?.tfceer?.tafasir?.soar);
  useEffect(() => {
    dispatch(tfceerFetching());
  }, []);
  console.log("tafceer", tafceer);
  return (
    <div className="ContentTafceer">
      <center>
        <h1
          className="lg:text-7xl
        md:text-6xl sm:text-5xl text-3xl
        p-4 text-green-500 font-bold mt-20" 
        >
          الخلاصة من تفسير الطبري
        </h1>
      </center>

<div className="flex flex-wrap justify-evenly gap-10 mt-32 mb-20">
{
  tafceer?.length >0?
tafceer.map((ele,index)=>{
return(
  <div key={index} className="bg-white 

  hover:scale-105 duration-150
  border-2 shadow-md p-5
  w-[300px] h-[380px] rounded-lg">
  <div className="flex p-2 gap-1">
  <div className="">
    <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
  </div>
  <div className="circle">
    <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
  </div>
  <div className="circle">
    <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
  </div>
</div>
<div className="card__content h-[100%] p-4 flex flex-col items-center justify-evenly
">
  <h1 className="text-2xl">{ele.name}</h1>
  <LazyLoad>
  <audio controls>
    <source src={ele.url} type="audio/mp3" />
  </audio>
  </LazyLoad>
</div>
</div>
)
})
  :<Loader />
}
</div>
    </div>
  );
}
