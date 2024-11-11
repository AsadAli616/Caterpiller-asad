"use client";

import { Alert } from 'antd';
import Image from 'next/image';
import './secXms.css'
import Nav from '../nav/nav';
import Sec1part1 from '../sec1part1/h1';

export default function Sec1xms({ballref})  {

   return<>
     <div className='absolute z-[5] left-0 right-0'>

   <Nav/>
   </div>
  
            <div className='bg_div  w-[100vw]  border-black h-[100vh] overflow-x-hidden  '>
            <div className='absolute z-[1]  overflow-x-hidden'>
    
        <div className='marquee-text  mt-[100px]  '>

               <Image width={500} height={500} src={'/clouds.png'}/>


        </div>
           
</div>
<div className='art_work z-[2]  relative   w-[100vw] h-[100%] ' >
<Image src={'/Xms.png'} width={0} height={0} className=' 	'  layout="fill" objectFit="cover"/>
</div>
<div  ref={ballref}  className='w-[15vw]  top-[60vh] left-[32vw] absolute h-[15vw]    z-[6]'>
    <img  src='/ball.png' className='absolute  ' />
   
</div>
<div className='absolute z-[6] top-[80vh] left-0 right-0'>


<Sec1part1/>
</div>
<div className='w-[100%] top-[85svh] absolute z-[5]'>
    <img src='/Layer 69.png' className='   w-[100%] ' />
   
</div>
            </div>
            

            </>
}
