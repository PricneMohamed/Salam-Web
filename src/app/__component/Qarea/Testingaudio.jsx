"use client";
import { aqraaFetching } from "@/app/rtk/aqraSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Testingaudio() {
  const distpatch = useDispatch();
  const audio = useSelector((state) => state.quranAduio);
  useEffect(() => {
    distpatch(aqraaFetching());
  }, []);
  let i = 1;
  let audioArray = [];
  for (let i = 1; i <= 114; i++) {
    if (i < 10) {
      audioArray.push(`00${i}`);
    } else if (i < 100) {
      audioArray.push(`0${i}`);
    } else if (i > 100) {
      audioArray.push(`${i}`);
    }
  }
  return (
    <div className="Testingaudio">
      {audioArray.map((ele, index) => {
        return (
          <audio key={index} id="audioPlayer" controls>
            <source
              id="audioSource"
              src={`https://server6.mp3quran.net/akdr/${ele}.mp3`}
              type="audio/mpeg"
            />
          </audio>
        );
      })}
    </div>
  );
}
