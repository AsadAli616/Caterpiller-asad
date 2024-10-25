"use client";
import './disc3.css'

import { useState } from "react"

export default function Disc3({updateTrans ,trans ,hOver}){
    const [rotate ,setrotate] = useState(false)
    console.log(rotate)
    return<>


    
    
    <div onMouseEnter={()=>{
      hOver("fourth")
      updateTrans("enter3")}} onMouseLeave={()=>{updateTrans("leave3")  
     if(trans=="leave3"){
      setTimeout(()=>{settrans("")},"800")    }}} className="div1 absolute w-[18vw]   h-[15vw]  ">
        <img className="imG2 absolute z-10" src="/Layer 17.png"/>
        <img className="imG absolute border left-[6.7vw] rounded-[100%] border-black " src="/vinyl_.png"/>
    </div>
  

    </>
  }
  