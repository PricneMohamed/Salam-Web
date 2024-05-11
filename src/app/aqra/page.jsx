import React from "react";
import Banner from "../__component/Qarea/Banner";
import Qarea from "../__component/Qarea/Qarea";
export const metadata = {
  title: "اقرأ",
  description: "مرحبا بك في قسم القراءة",
};
export default function Aqra() {
  return (
    <div className="Aqra h-[100%]">
      <Banner />
      <Qarea />
    </div>
  );
}
