
"use client";
import { useState } from 'react';

import './playlist.css'

export default function Playpaue(){
    const [play ,setplay] =useState(false)
return<>
<div className="border h-[35px] w-[220px] overflow-hidden  rounded-[30px] flex mx-auto ">
<div 
onClick={()=>{play==false?setplay(true):setplay(false)}}
className='w-1/4 flex py-3 justify-center bg-[#a083d7]  relative p-2   items-center '>
  <button>
<h1 className='rotate-90 text-white  text-[14px]'>

    ON
</h1>
    </button>  
</div>
<div className='moon w-3/4   border relative  rounded-[30px]   border-white overflow-hidden '>

<svg id="" className=" absolute"     fill="transparent"
 viewBox="0 0 250 10" width={200} height={25}>
  <path
  className=''
    id="wave1"
    d="M330 21C324.5 21 324.5 1 319 1C313.5 1 314.5 21 308.5 21C302.5 21 304.5 1 297.5 1C290.5 1 294.5 21 288.5 21C282.5 21 284.5 1 277.5 1C270.5 1 272.5 21 265 21C257.5 21 258 1 252 1C246 1 245 21 240 21C235 21 237 1 231 1C225 1 226 21 220 21C214.5 21 214.5 1 209 1C203.5 1 204.5 21 198.5 21C192.5 21 194.5 1 187.5 1C180.5 1 184.5 21 178.5 21C172.5 21 174.5 1 167.5 1C160.5 1 162.5 21 155 21C147.5 21 148 1 142 1C136 1 135 21 130 21C125 21 127 1 121 1C115 1 116 21 110 21C104.5 21 104.5 1 99 1C93.5 1 94.5 21 88.5 21C82.5 21 84.5 1 77.5 1C70.5 1 74.5 21 68.5 21C62.5 21 64.5 1 57.5 1C50.5 1 52.5 21 45 21C37.5 21 38 1 32 1C26 1 25 21 20 21C15 21 17 1 11 1C5 1 6 21 0 21"
    stroke="#FFFFFF"
    strokeWidth={2}
  />
  <path
  className={play==true ? "kol":"pol" }
    id="wave2"
    d="M330 21C324.5 21 324.5 1 319 1C313.5 1 314.5 21 308.5 21C302.5 21 304.5 1 297.5 1C290.5 1 294.5 21 288.5 21C282.5 21 284.5 1 277.5 1C270.5 1 272.5 21 265 21C257.5 21 258 1 252 1C246 1 245 21 240 21C235 21 237 1 231 1C225 1 226 21 220 21C214.5 21 214.5 1 209 1C203.5 1 204.5 21 198.5 21C192.5 21 194.5 1 187.5 1C180.5 1 184.5 21 178.5 21C172.5 21 174.5 1 167.5 1C160.5 1 162.5 21 155 21C147.5 21 148 1 142 1C136 1 135 21 130 21C125 21 127 1 121 1C115 1 116 21 110 21C104.5 21 104.5 1 99 1C93.5 1 94.5 21 88.5 21C82.5 21 84.5 1 77.5 1C70.5 1 74.5 21 68.5 21C62.5 21 64.5 1 57.5 1C50.5 1 52.5 21 45 21C37.5 21 38 1 32 1C26 1 25 21 20 21C15 21 17 1 11 1C5 1 6 21 0 21"
    stroke="#FFFFFF"
    strokeWidth={2}
  />
</svg>



</div>

</div>
</>
}