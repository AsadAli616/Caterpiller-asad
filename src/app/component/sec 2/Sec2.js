"use client";

import Disc1 from '../disc1/disc';
import Disc2 from '../disc2/disc2'
import Disc3 from '../disc3/disc3';
import Disc4 from '../disc4/disc4';
import './sec2.css'
import { useState } from "react"
export default function Sec2(){
    const  [trans , settrans ] = useState("")

  function updateTrans(btn){
    settrans(btn)
  }

  return<>
  <div className="bg  ">

  
  <div className=" flex  absolute flex-col  border border-black w-[100vw] " >
    <div className='flex '>
<div className=' border z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[4.5vw]  lg:mt-[5.6vw] border border-red-500'>
    <Disc4 updateTrans={updateTrans} trans={trans} />
  </div>
    
  
</div>
<div className='  border z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[10vw] border border-red-500'>

    <Disc2 updateTrans={updateTrans} trans={trans} />
  </div>
  
</div>

    </div>

    <div className='flex '>

    <div className=' border z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[-3vw] lg:mt-[-2vw] border border-red-500'>

  <Disc3 updateTrans={updateTrans} trans={trans}/>
  </div>

</div>
<div className=' border  z-[40]  w-full h-[28vw]'>
  <div className='lg:mt-[4vw] lg:ml-[-4.4vw]  border border-red-500'>

    <Disc1 updateTrans={updateTrans} trans={trans} />
  </div>
  
</div>
    </div>

<div>
  <button className='text-[white] rounded-[50px] bg-[#a88add] text-[14px] py-1 leading-[] w-[80vw] mx-auto flex items-center justify-center ' >Discover the Vibes</button>
</div>
  </div>
  <div className="flex justify-center items-center w-[100vw] h-[55vw]" >
  {/* <div className="div0 border border-black w-[50vw] h-[50vh] absolute"></div> */}
  <div className={trans=="enter1"?"div1_trans_enter border    border-black w-[100vw] h-[100vh] absolute":   trans=="leave1" ? "div1_trans_leave border border-black w-[100vw] h-[100vh] absolute" :   "div1 border  border-black w-[100vw] h-[100vh] absolute"}>
    <div className=' flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>LOFI &</h1>
<h1 className='text_2 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>
NATURE 
</h1>
<h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '> SOUNDS</h1>

    </div>
     </div>
  <div className={trans=="enter2"?"div2_trans_enter border   border-black w-[100vw] h-[100vh] absolute":   trans=="leave2" ? "div2_trans_leave border border-black w-[100vw] h-[100vh] absolute " :   "div2 border  border-black w-[100vw] h-[100vh] absolute "}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>LOFI &</h1>
<h1 className='text_2 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>
NATURE 
</h1>
<h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '> SOUNDS</h1>

    </div>
  </div>
  <div className={trans=="enter3"?"div3_trans_enter border border-black w-[100vw] h-[100vh] absolute":   trans=="leave3" ? "div3_trans_leave border border-black w-[100vw] h-[100vh] absolute " :   "div3 border  border-black w-[100vw] h-[100vh] absolute"}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>LOFI &</h1>
<h1 className='text_2 text-[6vw] font-syntheses font-extrabold leading-[5vw] '>
NATURE 
</h1>
<h1 className='text_1 text-[6vw] font-syntheses font-extrabold leading-[5vw] '> SOUNDS</h1>

    </div>
  </div>
  <div className={trans=="enter4"?"div4_trans_enter border   border-black w-[100vw] h-[100vh] absolute":   trans=="leave4" ? "div4_trans_leave border border-black w-[100vw] h-[100vh] absolute " :   "div4 border  border-black w-[100vw] h-[100vh] absolute"}>
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
