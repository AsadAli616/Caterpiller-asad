"use client";
import {useRef,useState ,useEffect } from 'react'
import './page.css'
import '../component/Playpause/playlist.css'
import NaV2 from '../component/nav2/nav2';


const Contact = () =>{
    
return<>
 <NaV2/>
    <div  className=' my-3  flex md:flex-row flex-col w-[90vw] md:w-[90vw] xsm:py-4 xsm:px-1 md:p-8 mx-auto'>
    <div className='md:w-[50%]'><img src='/Contact_img.png' /></div>
    <div className='md:w-[50%] lg:pl-8'>
        <div className='flex xsm:my-3 md:my-0  flex-col px-2 lg:px-5'>

    <h1 className='text-[6vw] leading-[6vw] lg:text-[4vw] text-[#453a5a] lg:leading-[4vw] font-[900] tracking-tighter'>
        LOREM IPSUM DOLOR SIT AMET,
    </h1>
    <p className='text-[#453a5a]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit </p>
        </div>
   <div className='flex md:flex-row flex-col py-2 lg:px-4'><input placeholder='First name'  className=' border text-[#5f5f5f] xsm:pl-2  mx-1 rounded-md lg:mx-2 md:py-2 md:px-2 border-[#262626] md:w-[50%] inline-flex my-3 xsm:py-3 ' type='text'/> <input placeholder='Last name'  className=' border xsm:pl-2  text-[#5f5f5f] mx-1 rounded-md lg:mx-2 md:py-2 md:px-2 border-[#262626] md:w-[50%] inline-flex my-3 xsm:py-3 ' type='text'/> </div>
   
   <div className='flex md:flex-row flex-col  lg:px-4' ><input placeholder='Email'  className=' border text-[#5f5f5f] xsm:pl-2  mx-1 rounded-md lg:mx-2  md:px-2 border-[#262626] md:w-[100%] inline-flex  xsm:py-3 ' type='text'/></div>

   <div className='flex md:flex-row flex-col  lg:p-4' ><textarea placeholder='What is your query redarding?'  className='xsm:pl-2  border resize-none text-[#5f5f5f] mx-1 h-32 rounded-md lg:mx-2 xsm:my-4 md:my-0 md:px-2 border-[#262626] md:w-[100%] inline-flex  xsm:py-3 ' type='text'/></div>
<div className='flex md:flex-row flex-col px-2 lg:px-5'><button className=' text-[12px] text-[white] rounded-md bg-[#453a5a] w-[100%] py-2'>SUBMIT</button></div>
<div className='flex md:flex-row flex-col p-4 lg:p-8'>
    <img src='/ContactLogos.png'/>
</div>  
   </div>
    </div>
    <footer className="text-gray-600  my-3 body-font  bg-white">
  <div className=" lg:w-[80vw]   mx-auto flex  py-[3vw] border-none-none border-none-none-black  md:flex-row-reverse md:flex-nowrap flex-wrap flex-col-reverse ">
    <div className="w-[100vw] md:w-1/4 xsm:p-4 md:p-0    md:mx-0 md:pt-4 mx-auto  md:text-left md:mt-0 ">
      <a className="flex title-font font-medium items-center xsm:justify-start  md:justify-start justify-center text-gray-900">
       <img src="/logo black.png" width={120}/>
      </a>
      <p className="mt-2 lg:text-[1vw] lg:leading-[1vw]  text-gray-500">
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap   md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full  flex flex-col items-center   border-none-black">
        
        <nav className="list-none p-4   xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center" >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Social
        </h2>



          <li  className="py-1">
            <a className=" text-black font-[600] text-[10px]  leading-[14px] tracking-widest">YOUTUBE</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">TWICH</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">INSTAGRAM</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">X-TIWTTER</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">DISCORD</a>
          </li > 
           <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">SPOTIFY</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">

<nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center " >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
        QuicksLinks
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">HOME</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ABOUT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">BLOG</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CONTACT</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">
      <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">

        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Shop
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ALL PRODUCT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">VINYL</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CD & TAPES</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  sm:justify-center lg:justify-start border-none-none border-none-none-black ">
        
        <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Listen
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">LIVE STRAM</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">PLAYLIST</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">REALESE</a>
          </li>
        
        </nav>
      </div>
    </div>
  </div>
  <div className=" border border-[#242426] ">
    <div className="  w-[90vw] py-1 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">

    <div className="  w-[84vw] py-3 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-black font-[600] text-[10px] xsm:text-center  ">
        © 2024 CATERPILLER ALL RIGHTS SERVED
     
      </p>
      <span className="inline-flex  text-black sm:ml-auto sm:mt-0 font-[900] mt-2 text-[10px] justify-center sm:justify-start">
      CREATED WITH   <img src="/heart.png" className="mx-1" width={20} height={20}/>BY<img src="/dc.png" className="mx-1" width={20} height={20}/>
      </span>
      <span className="inline-flex   text-black sm:ml-auto sm:mt-0 font-[500] mt-2 text-[8px] justify-center sm:justify-start">
    <span className="text-[10px] mx-1">Terms & condition</span>
    <span className="text-[10px] mx-1">Privacy policy</span>
      </span>
    </div>
  </div>
  </div>
</footer>

</>
}
export default Contact;