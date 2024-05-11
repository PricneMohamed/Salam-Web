import Banner from "@/app/__component/Qarea/Details/Banner";
import Qeraah from "@/app/__component/Qarea/Details/Qeraah";
import React from "react";
const getData = async (param) => {
  const res = await fetch(
    `https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${param}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function DetailsSura({ params }) {
  const data = await getData(params.details);
  console.log(data);
  return (
    <div className="DetailsSura">
        <Banner dataQarea ={data} />
        <Qeraah dataQarea={data} />
    </div>
  );
}
