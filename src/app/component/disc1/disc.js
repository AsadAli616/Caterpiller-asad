"use client";
import './disc.css'

import { useState } from "react"
import useResponsive_layout from '../responsive_layout/responsive'
export default function Disc1({updateTrans ,trans,hOver , isPlaying}){
    const [rotate ,setrotate] = useState(false)
    const {winDowWidth} = useResponsive_layout()
    console.log(isPlaying)
    console.log(winDowWidth)
    
    return<>
   

    
    
    <div onMouseEnter={()=>{
      hOver("third")
      updateTrans("enter4")}} onMouseLeave={()=>{updateTrans("leave4")  
     if(trans=="leave4"){
      setTimeout(()=>{settrans("")},"800")    }}}  className={winDowWidth >= 426 ?"div11 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] ": "div11 hidden   relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] "}>
        <img className="imG2 absolute z-10" src="/Layer 19.png "/>
        <img className="imG absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " src="/vinyl  copy.png"/>
    </div>






    <div   className={`${winDowWidth <= 425 ?" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :  isPlaying?  "div111 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] hidden "}`}>
        <img className={`${isPlaying?"imG22 absolute z-10" :" absolute z-10"}`} src="/Layer 19.png "/>
        <img className={`${isPlaying?"imG11 absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " :" absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " }`} src="/vinyl  copy.png"/>
    </div>
  
    </>
  }
  