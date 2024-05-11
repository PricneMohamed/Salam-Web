"use client";
import Link from "next/link";
import React from "react";

export default function Banner(props) {
  const ele = props.dataQarea.reciters[0];
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            مرحبا بك في قسم القارئ
            <strong className="font-extrabold text-green-700 sm:block mt-5">
              {" "}
              .{ele.name}{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            ستجد هنا {ele.moshaf[0]?.surah_total} سورة بصوت القارئ {ele.name}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 1000,
                  behavior: "smooth",
                });
              }}
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
            >
              ابدء القراءة
            </button>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
              href="/salaplayer"
            >
              مواقيت الصلاة
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
