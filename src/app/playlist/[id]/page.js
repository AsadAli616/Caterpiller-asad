
"use client";

import data from '../../Arry.json'
import bg from '../../bg.json'

import Drawer1 from '../../component/drawer/drawer';
import {useRef,useState ,useEffect } from 'react'
import '../../component/Playpause/playlist.css'
import NaV2 from '@/app/component/nav2/nav2';
export default function Songs({params}){
   const {id} = params
console.log(typeof id)
   const audioref2 = useRef()
 const FilTerData = data.find((res)=>res.id === id  )

 const FilTerbg = bg.find((res1)=>res1.id === id  )


   const contentStyle = {
    backdropFilter: 'blur(12px)',  // Apply blur to the background
    
  };
console.log(FilTerData)


    useEffect(()=>{
        audioref2.current= new Audio(FilTerData.audio)
        
    },[FilTerbg])
    const [isPlaying2, setIsPlaying2] = useState(false);

    

      const togglePlay2 = () => {
        const audio = audioref2.current;
        if (isPlaying2) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying2(!isPlaying2);
      };

   return<>
     <NaV2/>

    <div    className=' border-black w-[100vw] flex justify-center items-center h-[100vh] md:h-[140vh] relative '>
        
        <img src={FilTerbg.img} className='md:w-[100vw] w-[160vw]  md:h-[140vh]  h-[100vh] absolute z-[1] '/>
        <div style={contentStyle} className='absolute h-[100vh] md:w-[100%] w-[100vw]  md:h-[140vh] z-[2]' ></div>
        <div className=' rounded-[20px] overflow-hidden border-black w-[80vw] md:w-[25%] relative flex flex-col z-[5]'>
    
        <div style={contentStyle} onClick={()=>{togglePlay2()}} className='absolute text-white z-[4] border border-rounded lg:top-[10vw] top-[30vw] left-[30vw]   h-[80px] lg:left-[10vw] right-0 rounded-full w-[80px] items-center flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg></div>
    <img src={FilTerData.img} className='z-[2] relative' />
    <div className='bg-[#2e2e2e] text-center text-white p-4 pt-10 mt-[-20px]'> 
        <div className='text-[1.5vw] leading-[1.8vw] '>Lorem ipsum dolor sit amet,  consectetur adipiscing eli</div>
        <div className=' text-[14px] text-[#888681]'>The full catalog of releases through the chill caterpillar Musi</div>

    </div>
    <div className='w-[100%] p-2 justify-between flex bg-white  items-center border-black'>
        <img src='/Playlist_Card.png' className='w-[50%] px-1 py-4' />
        <button className=' h-[35px] border px-8 border-[#453a5a]  rounded-md text-[#453a5a]'>play</button>
    </div>
    <div className='w-[100%] px-2 py-4 justify-between flex bg-white  items-center border-black'>
        <img src='/Playlist_Card2.png' className='w-[60%] ' />
        <button className=' h-[35px] border px-8 border-[#453a5a] rounded-md text-[#453a5a]'>play</button>
    </div>
        </div>
        <div>

        </div>
        </div> 

        <footer className="text-gray-600 body-font  bg-white">
  <div className=" lg:w-[80vw]   mx-auto flex  py-[3vw] border-none-none border-none-none-black  md:flex-row-reverse md:flex-nowrap flex-wrap flex-col-reverse ">
    <div className="w-[100vw] md:w-1/4 xsm:p-4 md:p-0    md:mx-0 md:pt-4 mx-auto  md:text-left md:mt-0 ">
      <a className="flex title-font font-medium items-center xsm:justify-start  md:justify-start justify-center text-gray-900">
       <img src="/logo black.png" width={120}/>
      </a>
      <p className="mt-2 lg:text-[1vw] lg:leading-[1vw]  text-gray-500">
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap   md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full  flex flex-col items-center   border-none-black">
        
        <nav className="list-none p-4   xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center" >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Social
        </h2>



          <li  className="py-1">
            <a className=" text-black font-[600] text-[10px]  leading-[14px] tracking-widest">YOUTUBE</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">TWICH</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">INSTAGRAM</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">X-TIWTTER</a>
          </li>
          <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">DISCORD</a>
          </li > 
           <li  className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">SPOTIFY</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">

<nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center " >
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
        QuicksLinks
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">HOME</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ABOUT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">BLOG</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CONTACT</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none-none border-none-none-black ">
      <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">

        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Shop
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">ALL PRODUCT</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">VINYL</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">CD & TAPES</a>
          </li>
          
        
        </nav>
      </div>
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  sm:justify-center lg:justify-start border-none-none border-none-none-black ">
        
        <nav className="list-none p-4   border-none-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">
        <h2 className="text-[14px] text-black text-start lg:py-2 font-[600] leading-[18px]">
          Listen
        </h2>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">LIVE STRAM</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">PLAYLIST</a>
          </li>
          <li className="py-1">
            <a className="text-black font-[600] text-[10px]  leading-[14px] tracking-widest">REALESE</a>
          </li>
        
        </nav>
      </div>
    </div>
  </div>
  <div className=" border  w-fit border-[#242426] mx-auto ">
    <div className="  w-[90vw] py-1 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">

    <div className="  w-[84vw] py-3 mx-auto  px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-black font-[600] text-[10px] xsm:text-center  ">
        © 2024 CATERPILLER ALL RIGHTS SERVED
     
      </p>
      <span className="inline-flex  text-black sm:ml-auto sm:mt-0 font-[900] mt-2 text-[10px] justify-center sm:justify-start">
      CREATED WITH   <img src="/heart.png" className="mx-1" width={20} height={20}/>BY<img src="/dc.png" className="mx-1" width={20} height={20}/>
      </span>
      <span className="inline-flex   text-black sm:ml-auto sm:mt-0 font-[500] mt-2 text-[8px] justify-center sm:justify-start">
    <span className="text-[10px] mx-1">Terms & condition</span>
    <span className="text-[10px] mx-1">Privacy policy</span>
      </span>
    </div>
  </div>
  </div>
</footer>
    
    </>
}