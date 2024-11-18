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
import useResponsive_layout from '@/app/component/responsive_layout/responsive'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef,useEffect ,useCallback, useState } from 'react';

gsap.registerPlugin(ScrollTrigger);
import Sec6 from "./sec6/sec6";
import Sec8 from "./component/sec8/sec8";
import LenisProvider from "./component/lenis/smooth";
import Sec1xms from "./component/sec1xsm/secXms";
import Slider from "./component/slider/slider";
import Sec2Xms from "./sec2Xsm/sec2Xms";
import Sec4Xms from "./component/Sec4Xms/Sec4Xms";

export default function Home() {
const {winDowWidth} = useResponsive_layout()

      const boxRef = useRef(null);

      const boxRef1 = useRef(null);
       const ballref = useRef(null);
       const ballref1 = useRef(null);

      const cdRef = useRef(null);
        const secRef6 = useRef(null);
        const div1 = useRef(null);






        const cdRefXms = useRef(null);
        const secRef6Xms = useRef(null);
        const div1Xms = useRef(null);
        const img1Xms = useRef(null);













        const img1 = useRef(null);
        const img2 = useRef(null);
        const marq1 = useRef(null);
        const marq2 = useRef(null);
        const marq3 = useRef(null);

        const text = useRef(null);
        const cloud = useRef(null);

        const Bot = useRef(null);
        

          useEffect(() => {
            var animateballXms ;
            var animateball;
            var pinsec6Xms;
            var pinAnimationXms;
            var pinAnimation;
            var text1;
            var pinsec6;
            var CLoud;
            var animateimg1;
            var animateimg2;
            if(winDowWidth <=425){
               pinAnimationXms = gsap.to(boxRef1.current, {
                scrollTrigger: {
                  scroller: "body",
                  trigger: boxRef1.current,
                  pin: true,
                  start: 'top top', // Pin when the top of boxRef1 hits the top of the viewport
                  end: '+=800', // Duration of the pin
                  markers: false,
                  onEnter: () => {
                    // Start animation on boxRef when boxRef1 is released
                    
                    animateBoxXms()
                   
                  // alert("asad")
                  },
                },
              });
              const animateBoxXms = () => {
                gsap.to(boxRef.current, {
                 x: "-75%",
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
            animateballXms = gsap.to(ballref.current, {
              y: "30vh",
               // Increased duration for slower animation
              scrollTrigger: {
                trigger: ballref.current,
                start: 'top center', // When the top of the box reaches the center of the viewport
                end: 'bottom', // Duration of the animation
                scrub: 2, // Increased scrub value for smoother scrolling effect
                markers: false,
              },
            });
          pinsec6Xms = gsap.to(secRef6Xms.current, {
              scrollTrigger: {
                scroller: "body",
                trigger: secRef6Xms.current,
                pin: true,
                start: 'top top', // Pin when the top of boxRef1 hits the top of the viewport
                end: '+=1000', // Duration of the pin
                markers: false,
                onEnter: () => {
                  // Start animation on boxRef when boxRef1 is released
                  animatesimg1Xms()
        
                  animatecdXms()
                  animatesdiv1Xms()
                  
                // alert("asad")
                },
               
              },
            });
            const animatecdXms = () => {
              gsap.to(cdRefXms.current, {
               transform: "rotate(2000deg)",
               scrollTrigger: {
                 trigger: cdRefXms.current,
                 start: 'top 10%', // When the top of the box reaches the center of the viewport
                 end: '+=1500', // Duration of the animation
                 scrub: 1,
                 markers: false,
               },
             });  
            }
            
            const animatesimg1Xms = () => {
              gsap.to(img1Xms.current, {
                top : "-100%",
               
               scrollTrigger: {
                 trigger: img1Xms.current,
                 start: 'top 100%', // When the top of the box reaches the center of the viewport
                 end: '+=1000', // Duration of the animation
                 scrub: 2,
                 markers: false,
               },
             });  
            }
          
            const animatesdiv1Xms = () => {
              gsap.to(div1Xms.current, {
             width :"300%",
              height :"150%",
                // transform: "scale(6.6)",
              duration: 10,
              scrollTrigger: {
               trigger: div1Xms.current,
               start: 'top top', // When the top of the box reaches the center of the viewport
               end: '+=1500', // Duration of the animation
               scrub: 2,
               
              },
              });  
              }
            
        
            
            }
            else{


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
   pinAnimation = gsap.to(boxRef1.current, {
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

  
   
    
    
 animateball = gsap.to(ballref.current, {
      y: "20vw",
      duration: 1, // Increased duration for slower animation
      scrollTrigger: {
        trigger: ballref.current,
        start: 'top center', // When the top of the box reaches the center of the viewport
        end: 'bottom', // Duration of the animation
        scrub: 4, // Increased scrub value for smoother scrolling effect
        markers: false,
      },
    });
   

 pinsec6 = gsap.to(secRef6.current, {
  scrollTrigger: {
    scroller: "body",
    trigger: secRef6.current,
    pin: true,
    start: '20% top', // Pin when the top of boxRef1 hits the top of the viewport
    end: '+=1500', // Duration of the pin
    markers: false,
    onEnter: () => {
      // Start animation on boxRef when boxRef1 is released
      console.log("asad")
      animatecd()
      animatesdiv1()
      animatesimg1()
      animatesimg2()
      marqu3()
      marqu1()
      marqu2()
    // alert("asad")
    },
   
  },
});


const animatecd = () => {
   gsap.to(cdRef.current, {
    transform: "rotate(2000deg)",
    duration: 1,
    scrollTrigger: {
      trigger: cdRef.current,
      start: 'top 10%', // When the top of the box reaches the center of the viewport
      end: '+=1500', // Duration of the animation
      scrub: 1,
      markers: false,
    },
  });  
}

const animatesimg1 = () => {
  gsap.to(img1.current, {
    transform: "translateY(-150%)",
   duration: 1,
   scrollTrigger: {
     trigger: img1.current,
     start: 'top 10%', // When the top of the box reaches the center of the viewport
     end: '+=1200', // Duration of the animation
     scrub: 2,
     markers: false,
   },
 });  
}


const animatesimg2 = () => {
gsap.to(img2.current, {
  transform: "translateY(150%)",
 duration: 1,
 scrollTrigger: {
   trigger: img2.current,
   start: 'top 10%', // When the top of the box reaches the center of the viewport
   end: '+=1200', // Duration of the animation
   scrub: 2,
   
 },
});  
}
const marqu1 = () => {
gsap.to(marq1.current, {
x:"-50%",
duration: 10,
scrollTrigger: {
 trigger: marq1.current,
 start: 'top 10%', // When the top of the box reaches the center of the viewport
 end: '+=1500', // Duration of the animation
 scrub: 2,
 
},
});  
}

const marqu2 = () => {
gsap.to(marq2.current, {
x:"-50%",
duration: 10,
scrollTrigger: {
trigger: marq2.current,
start: 'top 10%', // When the top of the box reaches the center of the viewport
end: '+=1500', // Duration of the animation
scrub: 2,

},
});  
}



 text1 = 
  gsap.to(text.current, {
  x:"-50%",
  duration: 10,
  scrollTrigger: {
  trigger: text.current,
  start: 'top 90%', // When the top of the box reaches the center of the viewport
  end: 'top  ', // Duration of the animation
  scrub: 2,
  markers :false
  
  },
  });
      
  
  CLoud = 
  gsap.to(cloud.current, {
  x:"-50%",
  duration: 10,
  scrollTrigger: {
  trigger: cloud.current,
  start: 'top 90%', // When the top of the box reaches the center of the viewport
  end: 'top  ', // Duration of the animation
  scrub: 2,
  markers :false
  
  },
  });

  



const marqu3 = () => {
gsap.to(marq3.current, {
x:"-50%",
duration: 10,
scrollTrigger: {
trigger: marq3.current,
start: 'top 10%', // When the top of the box reaches the center of the viewport
end: '+=1500', // Duration of the animation
scrub: 2,

},
});  
}
const animatesdiv1 = () => {
gsap.to(div1.current, {
width :"150%",
 height :"200%",
duration: 1,
scrollTrigger: {
 trigger: div1.current,
 start: 'top 10%', // When the top of the box reaches the center of the viewport
 end: '+=1500', // Duration of the animation
 scrub: 2,
 
},
});  
}
 animateimg2 = 
gsap.to(img1.current, {
transform: "translateY(0%)",
 duration: 1,
 scrollTrigger: {
   trigger: img1.current,
   start: 'top 90%', // When the top of the box reaches the center of the viewport
   end: 'top 50% ', // Duration of the animation
   scrub: 2,
   
   markers: false,

 },
 
});  
 animateimg1 = 
gsap.to(img2.current, {
transform: "translateY(0%)",
 duration: 1,
 scrollTrigger: {
   trigger: img2.current,
   start: 'top 90%', // When the top of the box reaches the center of the viewport
   end: 'bottom 50% ', // Duration of the animation
   scrub: 2,
   markers: false,

 },
});   
}
  const bot = 
  gsap.to(Bot.current, {
  x:"40%",
  duration: 9,
  
  markers:true, 
  scrollTrigger: {
    trigger: Bot.current,
   scroller:"body"
    
    },
  });  

 




// const animateBoxXms = () => {
//   gsap.to(boxRef.current, {
//    x: "-75%",
//    scrollTrigger: {
//      trigger: boxRef.current,
//      start: 'top top', // When the top of the box reaches the center of the viewport
//      end: 'bottom top', // Duration of the animation
//      scrub: 2,
//      markers: false,
//    },
//  });  
// }








// const pinAnimationXms = gsap.to(boxRef1.current, {
//   scrollTrigger: {
//     scroller: "body",
//     trigger: boxRef1.current,
//     pin: true,
//     start: 'top top', // Pin when the top of boxRef1 hits the top of the viewport
//     end: '+=1000', // Duration of the pin
//     markers: false,
//     onEnter: () => {
//       // Start animation on boxRef when boxRef1 is released
      
//       animateBoxXms()
     
//     // alert("asad")
//     },
//   },
// });






    return () => {
      if(winDowWidth<=425){
        animateballXms.kill()  
        bot.kill()
        pinAnimationXms.kill();

      }
      else{
    pinAnimation.kill()
    animateball.kill()
    text1.kill()
    pinsec6.kill()
    animateimg2.kill()
    animateimg1.kill()
    CLoud.kill()
    bot.kill()

    

      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
    
 
  
    };
  }, [winDowWidth]);







  return (
    <>
    <div>
    <div className={winDowWidth<=425?"":"hidden"} >


<div className="h-fit w-[100vw] bg-black"><Sec1xms ballref={ballref}/></div>

<div className="h-fit w-[100vw] "><Sec2Xms/></div>
<div ref={boxRef1} className=" w-[100vw]"><Sec3 boxRef={boxRef}/></div>

<div className="   bg-black  h-[100vh] w-[100vw] overflow-hidden" ref={secRef6Xms}>
<Sec4Xms cdRef={cdRefXms}  img1={img1Xms} div1={div1Xms}  />
</div> 
<div className="h-fit bg-[#a88add] py-8">
<Sec5/>
</div>
<div className=" border bg-black border-black overflow-hidden h-fit ">
<Sec8/>
</div>
<Sec7 Bot={Bot}/>
    </div>
    
 


    {winDowWidth >= 426 && (
        <LenisProvider>
          <div className="xsm:h-[65vw]">
            <Sec1 ballref={ballref} />
          </div>

          <div className="bg h-[65vw]">
            <Sec2 />
          </div>

          <div ref={boxRef1} className="h-[100vh]">
            <Sec3 boxRef={boxRef} />
          </div>

          <div className="bg-black overflow-hidden" ref={secRef6} >
            <Sec6
              cdRef={cdRef}
              img1={img1}
              img2={img2}
              div1={div1}
              marq3={marq3}
              marq2={marq2}
              marq1={marq1}
            />
          </div>

          <div className="h-[60vw] bg-[#a88add]">
            <Sec5 />
          </div>

          <div className="bg-black h-[52vw]">
            <Sec8 text={text} cloud={cloud} />
          </div>

          <div className="h-[60vw]">
            <Sec7 Bot={Bot} />
          </div>
        </LenisProvider>
      )}
  

  </div>
 
</>
  );
}
// 