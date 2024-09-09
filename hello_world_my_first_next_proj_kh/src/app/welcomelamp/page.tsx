import React from 'react'
import LampDemo from './lamp'
import { FlipWordsDemo } from "./flip-words-demo";


function Lamp() {
  return (
    <div className='bg-slate-950 h-screen'>
      <LampDemo />
      <FlipWordsDemo />
    </div>
  )
}

export default Lamp