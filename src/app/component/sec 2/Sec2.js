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
  <div className=" ">

  
  <div className="flex  absolute flex-col border border-black bg-black   w-[100vw] h-[100vh]" >
    <div className='flex '>
<div className=' z-[40] w-[50vw] h-[50vh]'>
  
    <Disc4 updateTrans={updateTrans} trans={trans} />
  
</div>
<div className='  z-[40] w-[50vw] h-[50vh]'>
  
    <Disc2 updateTrans={updateTrans} trans={trans} />
  
</div>

    </div>

    <div className='flex '>

    <div className=' z-[40] w-[50vw] h-[50vh]'>
  
  <Disc3 updateTrans={updateTrans} trans={trans}/>

</div>
<div className='  z-[40]  w-[50vw] h-[50vh]'>
  
    <Disc1 updateTrans={updateTrans} trans={trans} />
  
</div>
    </div>


  </div>
  <div className="flex justify-center items-center w-[100vw] h-[100vh]" >
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
