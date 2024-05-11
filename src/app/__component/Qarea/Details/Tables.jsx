"use client";
import { aqraaFetching } from "@/app/rtk/aqraSlice";
import { photoQuranFetching } from "@/app/rtk/slicePhotoFQuran";
import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { useDispatch, useSelector } from "react-redux";

export default function Tables(props) {
  const dispatch = useDispatch();
  const sura = useSelector((state) => state.photoType?.suwar);
  useEffect(() => {
    dispatch(photoQuranFetching());
  }, []);
  let arrsura = [];
  const audio = props.audio;
  const audioPlayer = audio.surah_list.split(",").map(Number);
  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              الرقم
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              الاسم
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              السورة
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {audioPlayer.map((ele, index) => {
            const matchingSura = sura?.find((item) => item.id === ele);
            return (
              <tr key={index} className="odd:bg-gray-50 text-center">
                <td
                  key={index}
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                >
                  {ele}
                </td>
                <td
                  key={index}
                  className="whitespace-nowrap px-4 py-2 text-gray-700"
                >
                  {matchingSura ? matchingSura.name : null}
                </td>
                <td
                  className="whitespace-nowrap                 
    px-4 py-2 text-gray-700 m-auto"
                >
                  <LazyLoad>
                    <audio controls className="m-auto">
                      <source
                        src={`${audio.server}${
                          ele <= 9
                            ? `00${ele}`
                            : ele <= 99
                            ? `0${ele}`
                            : `${ele}`
                        }.mp3`}
                        type="audio/mp3"
                      />
                    </audio>
                  </LazyLoad>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
