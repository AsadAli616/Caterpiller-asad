"use client";
import './disc3.css'

import { useState } from "react"
import useResponsive_layout from '../responsive_layout/responsive'

export default function Disc3({updateTrans ,trans ,hOver,isPlaying2 ,updateLeave}){
    const [rotate ,setrotate] = useState(false)
    const {winDowWidth} = useResponsive_layout()

    console.log(rotate)
    return<>


    
    
    <div onMouseEnter={()=>{
      hOver("fourth")
      updateTrans("enter3")
      updateLeave("leave1")}}  className={winDowWidth >= 426 ?"div11 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] ": "div11 hidden   relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] "}>
        <img className="imG2 absolute z-10" src="/Layer 17.png"/>
        <img className="imG absolute border  md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " src="/vinyl_.png"/>
    </div>
    <div  className={`${winDowWidth <= 425 ?" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :  isPlaying2?  "div111 relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] " :" relative xsm:w-[50vw] md:w-[18vw] md:h-[15vw] xsm:h-[50vw] hidden "}`}>
        <img className={`${isPlaying2?"imG22 absolute z-10" :" absolute z-10"}`} src='/Layer 17.png'/>
        <img className={`${isPlaying2?"imG11 absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " :" absolute border md:left-[6.7vw] xsm:left-[22vw] rounded-[100%] border-black " }`} src="/vinyl_.png"/>
    </div>

    </>
  }
  