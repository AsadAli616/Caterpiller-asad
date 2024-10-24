"use client";
import './disc.css'

import { useState } from "react"

export default function Disc1({updateTrans ,trans}){
    console.log(trans)
    const [rotate ,setrotate] = useState(false)
    console.log(rotate)
    return<>
   

    
    
    <div onMouseEnter={()=>{updateTrans("enter4")}} onMouseLeave={()=>{updateTrans("leave4")  
     if(trans=="leave4"){
      setTimeout(()=>{settrans("")},"800")    }}}  className="div1 absolute w-[18vw]  h-[15vw]  ">
        <img className="imG2 absolute z-10" src="/Layer 19.png "/>
        <img className="imG absolute border left-[6.7vw] rounded-[100%] border-black " src="/vinyl  copy.png"/>
    </div>
  
    </>
  }
  