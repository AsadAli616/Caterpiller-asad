
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
    
        <div style={contentStyle} onClick={()=>{togglePlay2()}} className='absolute text-white z-[4] border border-rounded top-[10vw]   h-[80px] left-[10vw] right-0 rounded-full w-[80px] items-center flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
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


    
    </>
}