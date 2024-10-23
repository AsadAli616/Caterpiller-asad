"use client";

import Disc1 from '../disc1/disc';
import Disc2 from '../disc2/disc2'
import Disc3 from '../disc3/disc3';
import Disc4 from '../disc4/disc4';
import Image from "next/image";

import './sec2.css'
import { useState } from "react"
export default function Sec2(){
    const  [trans , settrans ] = useState("")

  function updateTrans(btn){
    settrans(btn)
  }

  return<>
  <div className="  h-fit ">

  
  <div className=" bg flex  absolute flex-col w-[100vw] " >
    <div className='z-10 text-[50px] text-white  flex mx-auto'>
    <span className=' font-[600] text-white'>Fresh Spins:</span> New Releases
    </div>
    <div className='flex '>
<div className=' border-none z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[2.5vw]  lg:mt-[3vw] border-none border-none-red-500'>
    <Disc4 updateTrans={updateTrans} trans={trans} />
  </div>
    
  
</div>
<div className='  border-none z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[10vw] lg:mt-[5vw] border-none border-none-red-500'>

    <Disc2 updateTrans={updateTrans} trans={trans} />
  </div>
  
</div>

    </div>

    <div className='flex '>

    <div className=' border-none z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[-3vw] lg:mt-[-2vw] border-none border-none-red-500'>

  <Disc3 updateTrans={updateTrans} trans={trans}/>
  {/* <div className='flex  border-none border-none-black justify-end w-[100%] h-[100%] mt-[15vw] rotate-180 relative'>

<Image src={"/arroww.png"} width={100} height={100}/>
  </div> */}
  </div>

</div>
<div className=' border-none  z-[40]  w-full h-[28vw]'>
  <div className='lg:mt-[vw] lg:ml-[-4.4vw]  border-none border-none-red-500'>

    <Disc1 updateTrans={updateTrans} trans={trans} />
  </div>
  
</div>
    </div>

<div className=''>
  <button className='text-[white] rounded-[50px] bg-[#a88add] text-[14px] py-1 leading-[] w-[80vw] mx-auto flex items-center justify-center ' >Discover the Vibes</button>
</div>
  </div>
  <div className="flex justify-center border border-black items-center w-[100vw] h-[55vw]" >
  {/* <div className="div0 border-none border-none-black w-[50vw] h-[50vh] absolute"></div> */}
  <div className={trans=="enter1"?"div1_trans_enter border-none    border-none-black w-[100vw] h-[100vh] absolute":   trans=="leave1" ? "div1_trans_leave border-none border-none-black w-[100vw] h-[100vh] absolute" :   "div1 border-none  border-none-black w-[100vw] h-[100vh] absolute"}>
    <div className=' flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>LOFI &</h1>
<h1 className='text_2 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>
NATURE 
</h1>
<h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '> SOUNDS</h1>

    </div>
     </div>
  <div className={trans=="enter2"?"div2_trans_enter border-none   border-none-black w-[100vw] h-[100vh] absolute":   trans=="leave2" ? "div2_trans_leave border-none border-none-black w-[100vw] h-[100vh] absolute " :   "div2 border-none  border-none-black w-[100vw] h-[100vh] absolute "}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>LOFI &</h1>
<h1 className='text_2 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>
NATURE 
</h1>
<h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '> SOUNDS</h1>

    </div>
  </div>
  <div className={trans=="enter3"?"div3_trans_enter border-none border-none-black w-[100vw] h-[100vh] absolute":   trans=="leave3" ? "div3_trans_leave border-none border-none-black w-[100vw] h-[100vh] absolute " :   "div3 border-none  border-none-black w-[100vw] h-[100vh] absolute"}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>LOFI &</h1>
<h1 className='text_2 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>
NATURE 
</h1>
<h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '> SOUNDS</h1>

    </div>
  </div>
  <div className={trans=="enter4"?"div4_trans_enter border-none   border-none-black w-[100vw] h-[100vh] absolute":   trans=="leave4" ? "div4_trans_leave border-none border-none-black w-[100vw] h-[100vh] absolute " :   "div4 border-none  border-none-black w-[100vw] h-[100vh] absolute"}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>LOFI &</h1>
<h1 className='text_2 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>
NATURE 
</h1>
<h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '> SOUNDS</h1>

    </div>
  </div>
  </div>
  </div>

  </>
}
