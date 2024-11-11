"use client";

import { useState } from 'react';
import Image from "next/image";
import useResponsive_layout from "../responsive_layout/responsive"
import './nav.css'
import Drawer1 from '../drawer/drawer';
export default function Nav() {
    const [btn,setbtn] =useState("home")
    let layout = useResponsive_layout()
  return (
    <>
   
       <div className='lop   bg-white bg-opacity-50    flex justify-between rounded-[70px] mx-auto  md:w-[70vw] xsm:w-[90vw] px-6 py-[.6rem] mt-10'>
        
        <div className=' '>
        <Image 
          src="/logo.png" // Correct path without 'public'
          alt="Logo"

          width={layout<=740?70 :100} // Desired width
          height={layout<=740?70 :100}  // Desired height (adjust as needed)
        />
        

            </div>
<div className='md:hidden'>
<Drawer1/>
</div>
            <div className='md:flex md:w-4/6 justify-between  border-black xms:w-fit lg:w-4/6 items-center mx-1 xsm:hidden '>
                <div >
                    <button onClick={()=>{setbtn("home")}} className={btn=="home"?' trans text-white mx-3   md:text-[8px]    lg:text-[12px]   ':'trans   md:text-[8px]    lg:text-[12px]   text-white mx-3 opacity-30' }>Home</button>
                    <button onClick={()=>{setbtn("about")}} className={btn=="about"?' trans text-white mx-3   md:text-[8px]    lg:text-[12px]  ':'trans   md:text-[8px]    lg:text-[12px]    text-white mx-3 opacity-30' }>Aboute</button>
                    <button onClick={()=>{setbtn("play")}} className={btn=="play"?' trans text-white mx-3   md:text-[8px]    lg:text-[12px]  ':'trans   md:text-[8px]    lg:text-[12px]   text-white mx-3 opacity-30' }>Playlists</button>
                    <button onClick={()=>{setbtn("blog")}} className={btn=="blog"?'trans  text-white mx-3   md:text-[8px]    lg:text-[12px]  ':'trans   md:text-[8px]    lg:text-[12px]   text-white mx-3 opacity-30' }>Blog</button>
                    <button onClick={()=>{setbtn("shop")}} className={btn=="shop"?'trans  text-white mx-3   md:text-[8px]    lg:text-[12px]  ':'trans   md:text-[8px]    lg:text-[12px]   text-white mx-3 opacity-30' }>Shop</button>
                </div>
                <div>
                    <button className=' rounded-[60px] px-[4vw] py-2 font-[600]   md:text-[8px]    lg:text-[12px]   bg-[#c8dd98] '>contact</button>
                </div>
            </div>
      </div>  
    
     
    </>
  );
}
