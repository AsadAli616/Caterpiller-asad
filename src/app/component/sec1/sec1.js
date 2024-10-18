"use client";

import Image from 'next/image';
import {marquee} from 'react'
import Sec1part1 from '../sec1part1/h1';
import Nav from '../nav/nav';

export default function Sec1()  {

   return<>
  <div className='header top-[1vw] left-0 z-[5] right-0 absolute '>

<Nav/>
    </div>

   <div className='herobanner relative border border-white  '>
  
<div className='w-[100%] absolute z-[2]'>
    <img src='/bg.png' className='absolute w-[100%] ' />
   
</div>


<div className='w-[100%] absolute z-[3]'>
    <img src='/Group 17.png' className='absolute w-[100%] ' />
   
</div>

<div className='absolute z-[2]'>
     <marquee  behavior="scroll"  
    >
        <div className='mol flex  mt-[-200px] '>

               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>
               <Image width={2500} height={1000} src={'/clouds.png'}/>


        </div>
            </marquee> 
</div>



   <div className='z-[6] top-[45vw] absolute  left-0 right-0   flex items-end '>
    <Sec1part1/>
</div>
   </div>
  
            </>
}
