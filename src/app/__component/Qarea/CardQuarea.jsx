"use client";
import { aqraaFetching } from "@/app/rtk/aqraSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

export default function CardQuarea() {
  const dispatch = useDispatch();
  const qarea = useSelector((state) => state.quraa.reciters);
  useEffect(() => {
    dispatch(aqraaFetching());
  }, []);
  if (qarea?.length > 0) {
    return (
      <>
        {qarea?.map((ele, index) => {
          return (
            <Link
              href={`aqra/${ele.id}`}
              key={index}
              className=" w-48 h-64 rounded-lg mt-20 mb-20"
            >
              <div className="flex p-2 gap-1">
                <div className="">
                  <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div className="circle">
                  <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div className="circle">
                  <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                </div>
              </div>
              <div className="card__content h-[100%] flex justify-center items-center text-center">
                <h1 className=" text-2xl">{ele.name}</h1>
              </div>
            </Link>
          );
        })}
      </>
    );
  } else {
    return (
      <center>
        <Loader />
      </center>
    );
  }
}
