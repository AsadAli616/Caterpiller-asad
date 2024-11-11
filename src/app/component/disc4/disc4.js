"use client";
import './disc4.css'

import { useState } from "react"
import useResponsive_layout from '../responsive_layout/responsive'

export default function Disc4({updateTrans,trans,hOver,isPlaying1}){
    const [rotate ,setrotate] = useState(false)
    const {winDowWidth} = useResponsive_layout()

    console.log(winDowWidth)
    return<>
   

    
    
    <div
     onMouseEnter={()=>{
      hOver("second")
      updateTrans("enter1")}} onMouseLeave={()=>{updateTrans("leave1")  
     if(trans=="leave1"){
      setTimeout(()=>{settrans("")},"800")    }}}  className={winDowWidth >= 426 ?"div11 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] ": "div11 hidden   relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] "}>
        <img className="imG2 absolute z-10" src="/Layer 14.png"/>
        <img className="imG absolute border  md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " src="/vinyl  copy 2.png"/>
    </div>
    
    <div className={`${winDowWidth <= 425 ?" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :  isPlaying1?  "div111 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] hidden "}`}>
        <img className={`${isPlaying1?"imG22 absolute z-10" :" absolute z-10"}`}  src="/Layer 14.png"/>
        <img className={`${isPlaying1?"imG11 absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " :" absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " }`} src="/vinyl  copy 2.png"/>
    </div>
  
   
    </>
  }
  