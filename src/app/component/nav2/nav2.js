"use client";
import {useRef,useState ,useEffect } from 'react'
import '../Playpause/playlist.css'
import Drawer1 from "../drawer/drawer";
import Link from 'next/link';








export default function NaV2(){
    const audioRef = useRef();

    useEffect(()=>{
        audioRef.current= new Audio('/Bonita - Glory 320 Kbps.mp3')
        
    },[])
    const [play ,setplay] =useState(false)
    const [isPlaying, setIsPlaying] = useState(false);

      const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        setIsPlaying(!isPlaying);
      };

    return<>


<div className="border-none  nav flex  border-none-black w-[90vw] mx-auto p-2 justify-between ">
    
    <img src="/Navlogo.png" className="w-[100px] h-auto" ></img>
    <div className="xsm:hidden lg:flex text-[20px] cursor-pointer text-[#3e3e3d] font-[600] border-none border-none-black gap-8 h-full items-center text-center">
        <Link href={"/"}>
             <span className="">Home</span>
             </Link>
             <Link href={"/blog"}>
             <span className="">About</span>
             </Link>
             <Link href={"/playlist"}>
             <span className="">Playlist</span>
             </Link>
             <Link href={"/blog"}>
             <span className="">Blog</span>
             </Link>
             <Link href={"/contact"}>
             <span className="">Contact</span>
             </Link>
        
    </div>
    <div>
    <div className="xsm:hidden lg:flex  border-[2px] h-[35px] w-[220px] overflow-hidden border-[#474746]  rounded-sm flex mx-auto ">
<div 
onClick={()=>{
  togglePlay()
  if(play==false){setplay(true)}
   else{setplay(false)}}}
className='w-1/4 flex py-3 justify-center bg-[#a083d7]  relative p-2   items-center '>
  <button>
<h1 className='rotate- text-white bg-transparent text-[14px]'>

{ play==true ?   "ON" :  "OFF" }
</h1>
    </button>  
</div>
<div className='moon w-3/4    relative  rounded-[30px]   border-none-white overflow-hidden '>
<svg id="" className="absolute" fill="transparent" viewBox="0 0 250 10" width={200} height={25}>
  <path
    className=''
    id="wave1"
    d="M330 21C324.5 21 324.5 1 319 1C313.5 1 314.5 21 308.5 21C302.5 21 304.5 1 297.5 1C290.5 1 294.5 21 288.5 21C282.5 21 284.5 1 277.5 1C270.5 1 272.5 21 265 21C257.5 21 258 1 252 1C246 1 245 21 240 21C235 21 237 1 231 1C225 1 226 21 220 21C214.5 21 214.5 1 209 1C203.5 1 204.5 21 198.5 21C192.5 21 194.5 1 187.5 1C180.5 1 184.5 21 178.5 21C172.5 21 174.5 1 167.5 1C160.5 1 162.5 21 155 21C147.5 21 148 1 142 1C136 1 135 21 130 21C125 21 127 1 121 1C115 1 116 21 110 21C104.5 21 104.5 1 99 1C93.5 1 94.5 21 88.5 21C82.5 21 84.5 1 77.5 1C70.5 1 74.5 21 68.5 21C62.5 21 64.5 1 57.5 1C50.5 1 52.5 21 45 21C37.5 21 38 1 32 1C26 1 25 21 20 21C15 21 17 1 11 1C5 1 6 21 0 21"
    stroke="#a083d7"
    strokeWidth={2}
  />
  <path
    className={play==true ? "kol":"pol"}
    id="wave2"
    d="M330 21C324.5 21 324.5 1 319 1C313.5 1 314.5 21 308.5 21C302.5 21 304.5 1 297.5 1C290.5 1 294.5 21 288.5 21C282.5 21 284.5 1 277.5 1C270.5 1 272.5 21 265 21C257.5 21 258 1 252 1C246 1 245 21 240 21C235 21 237 1 231 1C225 1 226 21 220 21C214.5 21 214.5 1 209 1C203.5 1 204.5 21 198.5 21C192.5 21 194.5 1 187.5 1C180.5 1 184.5 21 178.5 21C172.5 21 174.5 1 167.5 1C160.5 1 162.5 21 155 21C147.5 21 148 1 142 1C136 1 135 21 130 21C125 21 127 1 121 1C115 1 116 21 110 21C104.5 21 104.5 1 99 1C93.5 1 94.5 21 88.5 21C82.5 21 84.5 1 77.5 1C70.5 1 74.5 21 68.5 21C62.5 21 64.5 1 57.5 1C50.5 1 52.5 21 45 21C37.5 21 38 1 32 1C26 1 25 21 20 21C15 21 17 1 11 1C5 1 6 21 0 21"
    stroke="#a083d7"
    strokeWidth={2}
  />
</svg>




</div>

</div>
    </div>
    <div className="lg:hidden">
<Drawer1 color={true}/>

    </div>
    </div>
    </>
}