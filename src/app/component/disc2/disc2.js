"use client";
import './disc2.css'

import { useState } from "react"

export default function Disc2({updateTrans ,trans})
    {
    const [rotate ,setrotate] = useState(false)
    console.log(rotate)
    return<>
    

    
    
    <div onMouseEnter={()=>{updateTrans("enter2")}} onMouseLeave={()=>{updateTrans("leave2")  
     if(trans=="leave2"){
      setTimeout(()=>{settrans("")},"500")    }}}  className="div1 absolute w-[15vw]   h-[15vw]  ">
        <img className="imG2 absolute z-10" src="/Layer 16.png "/>
        <img className="imG absolute border left-[6.7vw] rounded-[100%] border-black " src="/Group 18 copy.png"/>
    </div>
  

    </>
  }
  