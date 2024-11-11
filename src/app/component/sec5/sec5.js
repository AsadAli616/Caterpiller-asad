import './sec5.css'
import React from 'react';
import { Carousel } from 'antd';
export default function Sec5(){
    const contentStyle = {
        margin: 0,
        height: '0vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return<>
    <div  className='w-[100vw] -none -none-black flex flex-col '>
    <div className='text-center pt-8 text-[#faf5ee] xsm:my-6 md:my-0'><span className='md:text-[3.5vw] md:leading-[4vw] xsm:text-[7vw] xsm:leading-[7vw] font-[900]  tracking-tighter mx-1'>Live Lofi:</span><span className='md:text-[3.5vw] md:leading-[4vw] xsm:text-[7vw] xsm:leading-[7vw] mx-1 tracking-tighter'>Stream the Chill Vibes</span> </div>
    <div className='-none -none-black xsm:hidden md:flex py-8 lg:px-[6vw] md:px-[3vw] gap-4 justify-center items-center'>
    <div className=' -none -none-black  h-fit '><div className='relative'><img src='/Layer 32 copy.png' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>
    <div className=' -none -none-black  h-fit '><div className='relative'><img src='/sec5,2.png' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>
    <div className=' -none -none-black  h-fit '><div className='relative'><img src='/sec5,4.png' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>
    <div className=' -none -none-black  h-fit '><div className='relative'><img src='/sec5,1.png' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>

    </div>
<div className='xms:flex my-4 md:hidden'>


    <Carousel afterChange={onChange}>
      <div className='w-[100vw] h-fit grid place-content-center'>

      <div className=''>
      <div className='  -black  h-fit '><div className='relative'><img src='/Layer 32 copy.png' className='mx-auto' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>
      </div>
 </div>
 <div className='w-[100vw] h-fit grid place-content-center'>

<div className=''>
<div className='  -black  h-fit '><div className='relative'><img src='/sec5,2.png' className='mx-auto' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>
</div>
</div>

<div className='w-[100vw] h-fit grid place-content-center'>

<div className=''>
<div className='  -black  h-fit '><div className='relative'><img src='/sec5,4.png' className='mx-auto' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>
</div>
</div>
<div className='w-[100vw] h-fit grid place-content-center'>

<div className=''>
<div className='  -black  h-fit '><div className='relative'><img src='/sec5,1.png' className='mx-auto' width={280} /><div className=' -none -none-black absolute bottom-[2vw] left-0 right-0 text-[1.1vw] text-white'><h1 className='text-center '>lorem ipsum lorem ipsum</h1></div></div></div>
</div>
</div>
    </Carousel>

    </div>
    <div classname="-none -none-black flex mt-4 "><button className='-none bg-[#c8dd98] text-black -none-black px-[30vw] py-2 rounded-[60px] md:text-[.8vw] xsm:text-[4vw] text-center flex mx-auto'>LIVE STERAM HERE </button></div>

    </div>
    </>
}
