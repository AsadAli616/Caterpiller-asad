"use client";

import Disc1 from '../disc1/disc';
import Disc2 from '../disc2/disc2'
import Disc3 from '../disc3/disc3';
import Disc4 from '../disc4/disc4';
import Image from "next/image";

import './sec2.css'
import { useState } from "react"
export default function Sec2(){
    const  [trans , settrans ] = useState("enter1")
    const  [transLeav , settransLeav ] = useState("")

    const  [hover , sethover ] = useState("second")
    const  [Slide , setSlide ] = useState("")

    function updateTrans(btn){
      settrans(btn)
    }
    function updateLeave(btn){
      settransLeav(btn)
    }
  function hOver(state){
    sethover(state)
  }
function UpdateSlide(state){
  setSlide(state)
  console.log(Slide)

}

  return<>
  <div className="  h-fit overflow-hidden ">

  
  <div className="  flex  absolute flex-col w-[100vw] " >
    <div className='z-10 text-[50px] text-white  flex mx-auto leading-[60px]  my-2'>
    <span className=' font-[900] tracking-tighter	mx-1 text-white'>Fresh Spins:</span><span className=' font-[500] tracking-tighter	mx-1 text-white'>New Releases</span> 
    </div>
    <div className='flex '>
<div className=' border-none-none z-[40] w-full border-none border-none-white h-[28vw]'>
  <div className='lg:ml-[12vw]  lg:mt-[2vw] border-none border-none-red-500'>
    <Disc4 hOver={hOver} updateTrans={updateTrans} trans={trans} />
    
  </div>
  {/* <div className='  z-10 mt-[-10vw] ml-[3vw]  w-fit'>
    <Image className={hover =='first'?  'Hoverme rotate-[320deg] ':'Me rotate-[320deg] hidden '} src={"/arroww.png"} width={100} height={100}/>
    </div>   */}
  
</div>
<div className='  border-none-none z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[20vw] lg:mt-[7vw] border-none border-none-red-500'>

    <Disc2 hOver={hOver} updateLeave={updateLeave} updateTrans={updateTrans} trans={trans} UpdateSlide={UpdateSlide} />
  </div>
  {/* <div className='  z-10 mt-[-12vw] ml-[29vw]  w-fit'>
  <Image className={hover== 'second'?'Hoverme rotate-[10deg] ':'Me rotate-[10deg] hidden'} src={"/arroww.png"} width={100} height={100}/>
  </div>  */}
</div>

    </div>

    <div className='flex '>

    <div className=' border-none-none z-[40] w-full h-[28vw]'>
  <div className='lg:ml-[4vw] lg:mt-[-3vw] border-none border-none-red-500'>

  <Disc3 hOver={hOver} updateTrans={updateTrans} trans={trans} updateLeave={updateLeave} />

  </div>
  {/* <div className='   z-10 mt-[19vw] ml-[5vw]  w-fit'>
  <Image className={hover=='third'?'Hoverme rotate-[190deg]': 'Me rotate-[190deg] hidden' } src={"/arroww.png"} width={100} height={100}/>
  </div>  */}
</div>
<div className=' border-none-none  z-[40]  w-full h-[28vw]'>
  <div className='lg:mt-[5vw] lg:ml-[15.4vw]  border-none border-none-red-500'>

    <Disc1 hOver={hOver} updateTrans={updateTrans} trans={trans} updateLeave={updateLeave} />
  </div>
  {/* <div className='z-10 mt-[9vw] ml-[5vw]  w-fit'>
  <Image className={hover=='fourth'?'Hoverme rotate-[-70deg]':'Me rotate-[-70deg] hidden'} src={"/arroww.png"} width={100} height={100}/>
  </div>  */}
</div>
    </div>

<div className='mt-[-3vw]'>
  <button className='text-[white] rounded-[50px] bg-[#a88add] text-[14px] py-2 leading-[] w-[70vw] mx-auto flex items-center justify-center ' >Discover the Vibes</button>
</div>
  </div>
  <div className="flex justify-center  items-center w-[100vw] h-[63vw]" >
  {/* <div className="div0 border-none-none border-none-none-black w-[50vw] h-[50vh] absolute"></div> */}
  <div className={trans=="enter1"?"div1_trans_enter border-none-none    border-none-none-black w-[100vw] h-[63vw] absolute":   transLeav=="leave1" ? "div1_trans_leave border-none-none border-none-none-black w-[100vw] h-[63vw] absolute" :   "div1 border-none-none  border-none-none-black w-[100vw] h-[63vw] absolute"}>
    <div className=' flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[8vw]  font-syntheses font-extrabold leading-[6vw] tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[8vw]  font-syntheses font-extrabold leading-[6vw] tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[8vw]  font-syntheses font-extrabold leading-[6vw] tracking-tighter	 '> SOUNDS</h1>

    </div>
     </div>
  <div className={trans=="enter2"?"div2_trans_enter border-none-none   border-none-none-black w-[100vw] h-[60vw] absolute":   transLeav=="leave1" ? "div2_trans_leave border-none-none border-none-none-black w-[100vw] h-[63vw] absolute " :   "div2 border-none-none  border-none-none-black w-[100vw] h-[63vw] absolute "}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '> SOUNDS</h1>

    </div>
  </div>
  <div className={trans=="enter3"?"div3_trans_enter border-none-none border-none-none-black w-[100vw] h-[63vw] absolute":   transLeav=="leave1" ? "div3_trans_leave border-none-none border-none-none-black w-[100vw] h-[63vw] absolute " :   "div3 border-none-none  border-none-none-black w-[100vw] h-[63vw] absolute"}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '> SOUNDS</h1>

    </div>
  </div>
  <div className={trans=="enter4"?"div4_trans_enter border-none-none   border-none-none-black w-[100vw] h-[63vw] absolute":   transLeav=="leave1" ? "div4_trans_leave border-none-none border-none-none-black w-[100vw] h-[63vw] absolute " :   "div4 border-none-none  border-none-none-black w-[100vw] h-[63vw] absolute"}>
  <div className='  flex flex-col justify-center items-center h-[100%] relative   '>
      <div></div>
      <h1 className='text_1 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[8vw] font-syntheses font-extrabold leading-[6vw]  tracking-tighter	 '> SOUNDS</h1>

    </div>
  </div>
  </div>
  </div>

  </>
}
