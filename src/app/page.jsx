import Image from "next/image";
import Banner from "./__component/HomePage/Banner";
import SalaPlayer2 from "./__component/HomePage/SalaPlayer2";
import PhotoQuran from "./__component/HomePage/PhotoQuran";
import AduioQuran from "./__component/HomePage/AduioQuran";
export const metadata = {
title: "الصفحة الرئيسية",
description: "مرحبا بك في الصفحة الرئيسية",
};
export default function Home() {
  return (
    <div className="Home">
      <Banner />
      <SalaPlayer2 />
      <AduioQuran />
      <PhotoQuran />
    </div>
  );
}
