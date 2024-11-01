"use client";

import { useState } from 'react';
import Image from "next/image";

import './nav.css'
export default function Nav() {
    const [btn,setbtn] =useState("home")
  return (
    <>
   
       <div className='lop   bg-white bg-opacity-50   flex justify-between rounded-[70px] mx-auto  w-[70vw] px-6 py-[.6rem] mt-10'>
        
        <div>
        <Image 
          src="/logo.png" // Correct path without 'public'
          alt="Logo"
          width={100} // Desired width
          height={100} // Desired height (adjust as needed)
        />
        

            </div>


            <div className='flex justify-between w-4/6 items-center mx-1'>
                <div >
                    <button onClick={()=>{setbtn("home")}} className={btn=="home"?' trans text-white mx-3 text-[14px] ':'trans text-[14px] text-white mx-3 opacity-30' }>Home</button>
                    <button onClick={()=>{setbtn("about")}} className={btn=="about"?' trans text-white mx-3 text-[14px]':'trans text-[14px]  text-white mx-3 opacity-30' }>Aboute</button>
                    <button onClick={()=>{setbtn("play")}} className={btn=="play"?' trans text-white mx-3 text-[14px]':'trans text-[14px] text-white mx-3 opacity-30' }>Playlists</button>
                    <button onClick={()=>{setbtn("blog")}} className={btn=="blog"?'trans  text-white mx-3 text-[14px]':'trans text-[14px] text-white mx-3 opacity-30' }>Blog</button>
                    <button onClick={()=>{setbtn("shop")}} className={btn=="shop"?'trans  text-white mx-3 text-[14px]':'trans text-[14px] text-white mx-3 opacity-30' }>Shop</button>
                </div>
                <div>
                    <button className=' rounded-[60px] px-[4vw] py-2 font-[600] text-[14px] bg-[#c8dd98] '>contact</button>
                </div>
            </div>
      </div>  
    
     
    </>
  );
}
