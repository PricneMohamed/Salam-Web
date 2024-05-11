import React from 'react'
import SalaDiv from '../__component/Salaplayer/SalaDiv'
export const metadata = {
  title: "مواقيت الصلاة",
  description: "مرحبا بك في قسم مواقيت الصلاة",
};
export default function Salaplayer() {
  return (
    <div className='Salaplayer'>
        <SalaDiv/>
    </div>
  )
}
