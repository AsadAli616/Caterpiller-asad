"use client";
import './disc2.css'

import { useState } from "react"
import useResponsive_layout from '../responsive_layout/responsive'

export default function Disc2({updateTrans ,trans,setHover,hOver,isPlaying3})
    {
      const {winDowWidth} = useResponsive_layout()

    const [rotate ,setrotate] = useState(false)
    console.log(rotate)
    return<>
    

    
    
    <div onMouseEnter={()=>{hOver("first")
      updateTrans("enter2")}} onMouseLeave={()=>{updateTrans("leave2")  
     if(trans=="leave2"){
      setTimeout(()=>{settrans("")},"500")    }}}  className={winDowWidth >= 426 ?"div11 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] ": "div11 hidden   relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] "}>
        <img className="imG2 absolute z-10" src="/Layer 16.png "/>
        <img className="imG absolute border  md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " src="/Group 18 copy.png"/>
    </div>
    <div    className={`${winDowWidth <= 425 ?" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :  isPlaying3?  "div111 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] hidden "}`}>
        <img className={`${isPlaying3?"imG22 absolute z-10" :" absolute z-10"}`} src="/Layer 16.png "/>
        <img className={`${isPlaying3?"imG11 absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " :" absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " }`} src="/Group 18 copy.png"/>
    </div>
  

    </>
  }
  