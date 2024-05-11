"use client"
import { photoQuranFetching } from '@/app/rtk/slicePhotoFQuran'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'

export default function PhotoQuran() {
    useEffect(()=>{
        dispatch(photoQuranFetching())
    },[])
    const dispatch = useDispatch()
    const photo = useSelector(state => state.photoType.suwar)
if(photo?.length > 0){
  return (
    <div className="overflow-x-auto p-10 flex flex-col">
        <h1 className='text-3xl p-4 font-bold text-end'>
            ابدء ختمه الان
        </h1>
      <table className="min-w-full divide-y-2 divide-gray-200  text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">الاسم</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">بداية الصورة</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">نهاية الصورة</th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">النوع</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
    
        <tbody className="divide-y divide-gray-200">
            {photo?.map(ele=>{
                return(
                    <tr key={ele.id} className='text-center'>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ele.name}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ele.start_page}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ele.end_page}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{
                        ele.makkia ===1?"مكية":"مدنية"
    
                    }</td>
                         </tr>
                )
            })}
        </tbody>
      </table>
      <Link
      className="group m-auto mt-10 relative inline-flex items-center overflow-hidden rounded bg-green-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
      href="/aqra"
    >
      <span className="absolute -end-full transition-all group-hover:end-4">
        <svg
          className="size-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </span>
    
      <span className="text-sm font-medium transition-all group-hover:me-4">القراءة</span>
    </Link>
    </div>
      )
}else{
  return(
    <center>
      <Loader />
    </center>
  )
}
}
