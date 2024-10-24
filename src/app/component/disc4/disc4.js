"use client";
import './disc4.css'

import { useState } from "react"

export default function Disc4({updateTrans,trans}){
    const [rotate ,setrotate] = useState(false)
    console.log(rotate)
    return<>
   

    
    
    <div onMouseEnter={()=>{updateTrans("enter1")}} onMouseLeave={()=>{updateTrans("leave1")  
     if(trans=="leave1"){
      setTimeout(()=>{settrans("")},"800")    }}}  className="div1 absolute w-[18vw]   h-[15vw]  ">
        <img className="imG2 absolute z-10" src="/Layer 14.png"/>
        <img className="imG absolute border left-[6.7vw] rounded-[100%] border-black " src="/vinyl  copy 2.png"/>
    </div>
  
   
    </>
  }
  