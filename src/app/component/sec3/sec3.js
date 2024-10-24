"use client";
import './sec3.css'


import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
export default function Sec3({boxRef}){
    
    // const boxRef = useRef(null);

    // const boxRef1 = useRef(null);






//     useEffect(() => {
//     // Pin the second box
//     const pinAnimation = gsap.to(boxRef1.current, {
//       scrollTrigger: {
//         scroller: "body",
//         trigger: boxRef1.current,
//         pin: true,
//         start: 'top top', // Pin when the top of boxRef1 hits the top of the viewport
//         end: '+=800', // Duration of the pin
//         markers: true,
//         onEnter: () => {
//           // Start animation on boxRef when boxRef1 is released
          
//           setTimeout(()=>{ animateBox();},2000)
         
//         // alert("asad")
//         },
//       },
//     });

//     // Function to animate the first box
//     const animateBox = () => {
//        gsap.to(boxRef.current, {
//         x: "-100%",
//         duration: 10,
//         scrollTrigger: {
//           trigger: boxRef.current,
//           start: 'top center', // When the top of the box reaches the center of the viewport
//           end: 'top 100%', // Duration of the animation
//           scrub: 2,
//           markers: true,
//         },
//       });  
//     }
     
   

//     return () => {
//       // Clean up ScrollTrigger on component unmount
//       pinAnimation.kill();
//     // animateBox.kill()
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);



    
return(<>
<div  className='h-[120vh]'>


    <div className=' mx-auto relative w-[80vw] flex justify-between'>
        <div className='text-[40px] leading-[100px]'>
        <span className=' font-syntheses font-[800] '>Chill Picks: </span>
        <span className='font-[syntheses]'>Shop the Vibe</span>
        </div>
        <div className=' flex items-center  ' ><button className=' px-[5.5vw]  rounded-[60px] py-2 text-[12px] bg-[#c8dd98]'>Shop the Chill</button></div>
    </div>
    <div  className='relative bg-transparent border-none-none border-none-black flex w-fit h-[100vh]'>
        <div ref={boxRef}  className='relative border-none border-none-black flex w-fit h-[100vh]'>
        <div    className='   border-none border-none-black w-[50vw]  p-10 '>
            <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb]'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A asad Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
        <div className='hello  border-none border-none-black w-[50vw] p-10 '> 
            <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb]'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A Chill Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
        <div className='hello  border-none border-none-black w-[50vw] p-10'>
             <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb]'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A Chill Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
        <div className='hello  border-none border-none-black w-[50vw] p-10'> 
            <div className='border border-[#6e6d69] p-6 rounded-xl bg-[#f3eadb]'>
                <div>
                    <h1 className='leading-[40px] text-[25px] font-[500] py-[.1vw]'>A Chill Lo-Fi Christmas - CD</h1>
                    <h1 className='leading-[25px] text-[14px] font-[400] py-[.1vw]'>16 chill lo-fi Christmas tunes. Presented on a glitter green ca</h1>
                    <h1 className='leading-[25px] text-[20px] font-[500] py-[.1vw]'>$700 <del>$200</del></h1>

                </div>
                <div className='w-full flex justify-center items-center py-[4vw]'><img className='' src='/Layer 27.png' width={250} /></div>
            </div></div>
            </div>
    <div className='absolute top-[10vw]'><img className='w-[100vw]' src='/shop artwork.png'/></div>
    </div>
    </div>
    </>)
  
}
