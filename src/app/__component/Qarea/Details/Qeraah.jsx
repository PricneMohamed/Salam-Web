"use client";
import React from "react";
import Tables from "./Tables";

export default function Qeraah(props) {
  const ele = props.dataQarea.reciters[0].moshaf[0];

  return (
    <div className="Qeraah p-5">
      <h1
        className="text-end p-5 lg:text-4xl
        md:text-4xl sm:text-3xl text-xxl
        "
      >
        استمع الي القرأن و صفي قلبك من هموم الدنيا
      </h1>
      <Tables audio={ele} />
    </div>
  );
}
