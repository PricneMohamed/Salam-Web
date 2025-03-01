import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const param = usePathname();
  const linking = [
    { name: "الصفحة الرئيسية", href: "/" },
    { name: "مواقيت الصلاة", href: "/salaplayer" },
    { name: "اقرأ", href: "/aqra" },
    { name: "تفسير", href: "/tfceer" },
    { name: "تواصل معنا", href: "https://princemohamed.net" },
  ];
  let turn = 0;
  return (
    <header
      className="backdrop-blur-lg sticky 
    h-16
    top-0 mt-0.5 z-50"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <Image
                width={120}
                height={120}
                src={require("../img/31530356_bird_2-removebg-preview (1).png")}
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                {linking.map((ele, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className={
                          param == ele.href
                            ? "font-bold text-green-500"
                            : "text-gray-500 transition hover:text-gray-500/75"
                        }
                        href={ele.href}
                      >
                        {" "}
                        {ele.name}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button
                onClick={() => {
                  if (turn == 0) {
                    document.querySelector(".menu").style.transform =
                      "translate(0px)";
                    document.querySelector(".menu").style.transition = "0.4s";
                    turn = 1;
                  } else if (turn == 1) {
                    document.querySelector(".menu").style.transform =
                      "translate(-1200px)";
                    document.querySelector(".menu").style.transition = "0.4s";
                    turn = 0;
                  }
                }}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ************************************* */}

      <div
        className="flex h-screen lg:hidden
      md:hidden sm:hidden menu  translate-x-[-1200px]
      flex-col justify-between border-e bg-white"
      >
        <div className="px-4 py-6">
          <Image
            width={90}
            height={90}
            src={require("../img/31530356_bird_2-removebg-preview (1).png")}
          />

          <ul className="mt-6 space-y-1 flex flex-col gap-4">
            {linking.map((ele, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => {
                      document.querySelector(".menu").style.transform =
                        "translate(-1200px)";
                      document.querySelector(".menu").style.transition = "0.4s";
                    }}
                    href={ele.href}
                    className={
                      param === ele.href
                        ? "block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        : null
                    }
                  >
                    {ele.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
