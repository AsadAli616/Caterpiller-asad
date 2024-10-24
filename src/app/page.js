"use client";

import Image from "next/image";
import Nav from "./component/nav/nav";
import Playpaue from "./component/Playpause/Playpause";
import Sec1 from "./component/sec1/sec1";
import Sec1part1 from './component/sec1part1/h1'
import '../app/globals.css'
import Sec2 from "./component/sec 2/Sec2";
import Disc1 from "./component/disc1/disc";
import Disc2 from "./component/disc2/disc2";
import Disc3 from "./component/disc3/disc3";
import Disc4 from "./component/disc4/disc4";
import Sec3 from "./component/sec3/sec3";
import Sec5 from "./component/sec5/sec5";
import Sec7 from "./component/sec7/sec7";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


      const boxRef = useRef(null);

      const boxRef1 = useRef(null);
            const ballref = useRef(null);



          useEffect(() => {
    const pinAnimation = gsap.to(boxRef1.current, {
      scrollTrigger: {
        scroller: "body",
        trigger: boxRef1.current,
        pin: true,
        start: 'top top', // Pin when the top of boxRef1 hits the top of the viewport
        end: '+=800', // Duration of the pin
        markers: false,
        onEnter: () => {
          // Start animation on boxRef when boxRef1 is released
          
          animateBox()
         
        // alert("asad")
        },
      },
    });

    // Function to animate the first box
    const animateBox = () => {
       gsap.to(boxRef.current, {
        x: "-50%",
        duration: 10,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top top', // When the top of the box reaches the center of the viewport
          end: 'bottom top', // Duration of the animation
          scrub: 2,
          markers: false,
        },
      });  
    }
const animateball = gsap.to(ballref.current, {
      y: "20vw",
      duration: 10, // Increased duration for slower animation
      scrollTrigger: {
        trigger: ballref.current,
        start: 'top center', // When the top of the box reaches the center of the viewport
        end: 'bottom', // Duration of the animation
        scrub: 4, // Increased scrub value for smoother scrolling effect
        markers: false,
      },
    });
     
   

    return () => {
      // Clean up ScrollTrigger on component unmount
      pinAnimation.kill();
    // animateBox.kill()
    animateball.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);





  return (
    <div className="">
      {/* <Sec1part1/> */}
            {/* <Sec1/> */}
      {/* <Sec2/> */}
{/* <Sec1/> */}
      {/* <div className="h-[65vw]">

<Sec1/>
</div>

      <div  className="h-[70vw] pb-16 ">

<Sec2/>
</div>      
    <div ref={boxRef1} className=" ">

<Sec3  boxRef={boxRef} />
</div>
<div className="h-[65vw] bg-black ">


</div> */}
 <div  className="h-[65vw]">

<Sec1 ballref={ballref} />
</div>

<div className="bg h-[65vw]   ">
      <Sec2/>
</div>
<div ref={boxRef1}  className="h-[65vw]" >
<Sec3  boxRef={boxRef} />
</div>

    {/* <Sec5/> */}
    {/* <Sec7/> */}
      {/* <Disc4/> */}

   </div>
  );
}
