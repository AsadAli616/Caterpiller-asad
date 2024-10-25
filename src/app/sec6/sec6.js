import './sec6.css'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function  Sec6({img1,cdRef,img2 ,div1 ,marq3 ,marq2 ,marq1}){
      
    return<>
   <div className="relative border-none border-none-white flex justify-center items-center h-[160vh]">
    <div className='flex flex-col absolute h-[140vh] justify-center'>
    <marquee scrollamount="10"  loop="infinite">  
        <div ref={marq1}   className='divv flex gap-3 font-syntheses leading-[7vw] tracking-tighter text-[5.5vw] font-[900]  '>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE  STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1  className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    </div>
            </marquee> 
            <marquee scrollamount="10" loop="infinite">  
        <div ref={marq2} className='divv flex gap-3 font-syntheses leading-[7vw] tracking-tighter text-[5.5vw] font-[900]  '>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE  STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1  className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    </div>
            </marquee> 

            <marquee scrollamount="10" loop="infinite">  
        <div ref={marq3} className='divv flex gap-3 font-syntheses leading-[7vw] tracking-tighter text-[5.5vw] font-[900]  '>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE  STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1  className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    <h1 className="text_1">LIVE STREAM</h1>
    <h1 className="text_2">LIVE STREAM</h1>
    </div>
            </marquee> 



    </div>
<div className='flex w-[100vw] h-[140vh] justify-center items-center '>
<div className='border-none border-none-white w-1/3 h-full items-center flex justify-center '><img src='/sec6video2.png'ref={img1} className='img1' width={280}/></div>
    <div className='border-none border-none-white w-1/3 items-center flex justify-center '><img src='/cd.png' className='bg-transparent z-10' ref={cdRef} width={450}/><div ref={div1} className='w-[200px] bg-[#a88add]  h-[200px] rounded-full border-none absolute '></div></div>
    <div className='border-none border-none-white w-1/3 h-full items-center flex justify-center '><img src='/sec6video2.png'  ref={img2} className='img2' width={280}/></div>
    </div>

    

   </div>
    </>
  
}
