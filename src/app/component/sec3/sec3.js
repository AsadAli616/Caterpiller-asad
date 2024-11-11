"use client";
import './sec3.css'


import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function Sec3({boxRef}){
 


    
return(<>
<div  className='xsm:h-[100vh] md:h-[120vh] bg-white overflow-hidden '>


    <div className=' mx-auto relative w-[80vw] py-4 xsm:flex-col sm:flex-row flex justify-between'>
        <div className='   text-black  lg:text-[40px] lg:leading-[50px] xsm:text-[10vw]  xsm:leading-[10vw]'>
        <span className=' font-syntheses font-[800] '>Chill Picks: </span>
        <span className='font-[syntheses]'>Shop the Vibe</span>
        </div>
        <div className=' flex items-center my-2 ' ><button className=' px-[5.5vw]  rounded-[60px] py-2 text-[12px] bg-[#c8dd98]'>Shop the Chill</button></div>
    </div>
    <div  className='relative bg-transparent border-none-none border-none-black flex w-fit h-[100vh]'>
        <div ref={boxRef}  className='  relative border-none border-none-black md:my-4 lg:my-0 flex w-fit h-[100vh]'>
        <div    className='   border-none border-none-black md:w-[50vw] xsm:p-8 md:p-0 xsm:w-[100vw] md:mx-2 lg:mx-0 lg:p-10 '>
            <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb] text-black'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A asad Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
        <div className='hello  border-none border-none-black md:w-[50vw] xsm:p-8 md:p-0  xsm:w-[100vw] md:mx-2 lg:mx-0 lg:p-10 '> 
            <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb] text-black'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A Chill Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
        <div className='hello  border-none border-none-black md:w-[50vw] xsm:p-8 md:p-0  xsm:w-[100vw] md:mx-2 lg:mx-0 lg:p-10'>
             <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb] text-black'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A Chill Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
            <div className='hello  border-none border-none-black md:w-[50vw] xsm:p-8 md:p-0  xsm:w-[100vw] md:mx-2 lg:mx-0 lg:p-10'>
             <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb] text-black'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A Chill Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
            </div>
    <div className='absolute md:top-[20vh] xsm:top-[20vh] lg:top-[4vw] xsm:left-[-110vw] md:left-0'><img className='md:w-[100vw] md:h-[100%] xsm:w-auto xsm:h-[100vw] ' src='/shop artwork.png'/></div>
    </div>
    </div>
    </>)
  
}
