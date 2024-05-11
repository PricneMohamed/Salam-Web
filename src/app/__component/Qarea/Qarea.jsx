import React from "react";
import CardQuarea from "./CardQuarea";

export default function Qarea() {
  return (
    <div
      className="Qarea text-end p-5 mt-10
    lg:text-4xl md:text-4xl sm:text-3xl text-2xl
    "
    >
      <h1>ابحث هنا عن قارئك المفضل </h1>
      <div className="cardQarea flex flex-wrap justify-evenly gap-20">
        <CardQuarea />
      </div>
    </div>
  );
}
