import React, { useEffect, useState ,useRef } from 'react';
import { Carousel } from 'antd';
import Disc1 from '../disc1/disc';
import './slider.css'
import Disc4 from '../disc4/disc4';
import Disc3 from '../disc3/disc3';
import Disc2 from '../disc2/disc2';
const contentStyle = {
  margin: 0,
  height: '70vh',
  innerWidth: '100vw',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => {
  
  const [animation , setanimation ] = useState("0")
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/chill-lofi-music-interior-lounge-256260.mp3'));
 

 
  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const conditonCheck = () => {
    const audio = audioRef.current;
    audio.pause();

  };
  











  const [isPlaying1, setIsPlaying1] = useState(false);
  const audioRef1 = useRef(new Audio('/piano-calm-inspiring-255443.mp3'));
 

 
  const togglePlay1 = () => {
    const audio = audioRef1.current;
    if (isPlaying1) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying1(!isPlaying1);
  };




  const conditonCheck1 = () => {
    const audio = audioRef1.current;
    audio.pause();

  };
  
  const [isPlaying2, setIsPlaying2] = useState(false);
  const audioRef2 = useRef(new Audio('/please-calm-my-mind-125566.mp3'));
 

 
  const togglePlay2 = () => {
    const audio = audioRef2.current;
    if (isPlaying2) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying2(!isPlaying2);
  };


  const conditonCheck2 = () => {
    const audio = audioRef2.current;
    audio.pause();

  };
  



  const [isPlaying3, setIsPlaying3] = useState(false);
  const audioRef3 = useRef(new Audio('/chill-lofi-music-interior-lounge-256260.mp3'));
 

 
  const togglePlay3 = () => {
    const audio = audioRef3.current;
    if (isPlaying3) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying3(!isPlaying3);
  };










  const conditonCheck3 = () => {
    const audio = audioRef3.current;
    audio.pause();

  };
  







  
  return (
    <Carousel dots={false} afterChange={(currentSlide)=>{setanimation(currentSlide) 
      setIsPlaying3(false)
      setIsPlaying2(false)
      setIsPlaying1(false)
      setIsPlaying(false)
      }
     
    }
    beforeChange={(currentSlide)=> { 
      if(currentSlide == 0)conditonCheck()
      if (currentSlide == 1)conditonCheck1()
      if (currentSlide == 2)conditonCheck2()
      if (currentSlide == 3)conditonCheck3()  
     }}
   	 >
     
   
     <div className='xsm:h-[60vh] 3xms:h-[60vh] 2xms:h-[80vh]  w-[100vw] overflow-x-hidden' >
        <div className={animation == "0" ?'text_Animate  text-pretty text-center ' :'text_Animate1  text-pretty text-center '}>
        <h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '> SOUNDS</h1>
        </div>
        <div className='mx-[15vw]  mt-10 -black w-fit'  onClick={togglePlay}>


        <Disc1 isPlaying={isPlaying}/>
        </div>
      
      </div>
      <div className='xsm:h-[60vh] 3xms:h-[60vh] 2xms:h-[80vh]  w-[100vw] overflow-x-hidden' >
        <div className={animation == "1" ?'text_Animate  text-pretty text-center ' :'text_Animate1  text-pretty text-center '}>
        <h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '> SOUNDS</h1>
        </div>
        <div   onClick={togglePlay1} className='mx-[15vw]  mt-10 -black w-fit'>


        <Disc4 isPlaying1={isPlaying1} />
        </div>
      
      </div>
      <div className='xsm:h-[60vh] 3xms:h-[60vh] 2xms:h-[80vh]  w-[100vw] overflow-x-hidden' >
        <div className={animation == "2" ?'text_Animate  text-pretty text-center ' :'text_Animate1  text-pretty text-center '}>
        <h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '> SOUNDS</h1>
        </div>
        <div className='mx-[15vw]  mt-10 -black w-fit' onClick={togglePlay2}>


        <Disc3 isPlaying2={isPlaying2} />
        </div>
      
      </div>
      <div className='xsm:h-[60vh] 3xms:h-[60vh] 2xms:h-[80vh]  w-[100vw] overflow-x-hidden' >
        <div className={animation == "3" ?'text_Animate  text-pretty text-center ' :'text_Animate1  text-pretty text-center '}>
        <h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>LOFI &</h1>
<h1 className='text_2 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '>
NATURE 
</h1>
<h1 className='text_1 text-[14vw]  font-syntheses font-extrabold leading-[12vw] tracking-tighter	 '> SOUNDS</h1>
        </div>
        <div className='mx-[15vw]  mt-10 -black w-fit'  onClick={togglePlay3}>


        <Disc2 isPlaying3={isPlaying3}/>
        </div>
      
      </div>
     
      
    </Carousel>
  );
};

export default Slider;