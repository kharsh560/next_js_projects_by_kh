"use client";
import React from "react";
// import { WavyBackground } from "../../components/wavy-background";
import { motion } from "framer-motion";
import {LampContainer} from "./components/lamp"
import WavyBackgroundDemo from "./components/WavyBackground";

export default function LampDemo() {
  return (
    <div>
      
      <WavyBackgroundDemo />
      
      {/* <LampDemo /> */}
    </div>
    // <div className=" bg-black">
    //   {/* <h1 className=' text-teal-700'>Hello</h1> */}
      
    //   <div className=" relative top-0">
    //     <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
    //       Hero waves are cool
    //     </p>
    //     <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
    //       Leverage the power of canvas to create a beautiful hero section
    //     </p>
    //   </div>
    // </div>
  );
}
