import moment from "moment/moment";
import Image from "next/image";
import React from "react";

export default function Card(props) {
  return (
    <article
      className="hover:animate-background mb-10
  w-[300px]
  rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
    >
      <div className="rounded-[10px] flex flex-col justify-center bg-white p-4 !pt-20 sm:p-6">
        <Image
          width={200}
          height={200}
          className="w-[100%] h-[200px] mb-10 object-cover"
          src={props.image}
        />
        <time datetime="2022-10-10" className="block text-xs text-gray-500">
          {moment().format("MMM Do YY")}
        </time>

        <a href="#">
          <h3 className="mt-0.5 my-auto text-lg font-medium text-gray-900">
            {props.name}
            <span> {props.Sala}</span>
          </h3>
        </a>
        <div className="mt-4 flex flex-wrap gap-1">
          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            {props.rak3a1}
          </span>

          <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
            {props.rak3a2}
          </span>
        </div>
      </div>
    </article>
  );
}
