
import './sec7.css'
import { Carousel } from 'antd';

export default function Sec7({Bot}){
    return<>
    <div className="border-none border-none-black bg-white flex flex-col items-center justify-center ">
        <div className="text-center text-black py-4">
            <h1 className="xsm:text-[8vw] xsm:leading-[8vw] lg:text-[2.8vw] lg:leading-[3vw] font-[900] lg:tracking-tight xsm:tracking-[-.5vw]	 ">Dive Into The Beats :</h1>
            <h1 className="xsm:text-[8vw] xsm:leading-[8vw] lg:text-[2.8vw] lg:leading-[3vw] xsm:tracking-[-.5vw] lg:tracking-tight		 font-[300]">Playlist For Every Mood</h1>

        </div>
        
        <div className=" justify-center md:flex xsm:hidden gap-4 py-[1.4vw] items-center">
        <div className="border-none border-none-black"><div className="relative"><img src="/footer-img1.png" width={250}/><div className="absolute bottom-[1.8vw] text-[1.1vw] left-[.9vw] text-white ">Late Night Vides</div></div></div>
        <div className="border-none border-none-black"><div className="relative"><img src="/2.png" width={250}/><div className="absolute bottom-[1.8vw] text-[1.1vw] left-[.9vw] text-white ">Late Night Vides</div></div></div>
        <div className="border-none border-none-black"><div className="relative"><img src="/3.png" width={250}/><div className="absolute bottom-[1.8vw] text-[1.1vw] left-[.9vw] text-white ">Late Night Vides</div></div></div>
        <div className="border-none border-none-black"><div className="relative"><img src="/4.png" width={250}/><div className="absolute bottom-[1.8vw] text-[1.1vw] left-[.9vw] text-white ">Late Night Vides</div></div></div>

        </div>
        <div className='w-[100vw] md:hidden  '>

        <Carousel autoplay >
      <div className='w-[100vw] '>
      <div className=""><div className="relative"><img className='w-[100vw]' src="/footer-img1.png" /><div className="absolute top-[8vw] font-[900]  text-[8.1vw] left-[2.9vw] text-white ">Late Night Vides</div></div></div>

      </div>
      <div className='w-[100vw]'>
      <div className=""><div className="relative"><img src="/2.png" className='w-[100vw]'/><div className="absolute top-[8vw] text-[8.1vw] font-[900] left-[2.9vw] text-white ">Late Night Vides</div></div></div>

      </div>
      <div className='w-[100vw]'>
      <div className=""><div className="relative"><img src="/3.png" className='w-[100vw]'/><div className="absolute top-[8vw] text-[8.1vw] font-[900] left-[2.9vw] text-white ">Late Night Vides</div></div></div>

      </div>
      <div className='w-[100vw]'>
      <div className=""><div className="relative"><img src="/4.png" className='w-[100vw]'/><div className="absolute top-[8vw] text-[8.1vw] font-[900] left-[2.9vw] text-white ">Late Night Vides</div></div></div>

      </div>
    </Carousel>
        </div>
    </div>
    <div>
    <footer className="text-gray-600 body-font  bg-white">
  <div className=" lg:w-[80vw]   mx-auto flex  py-[3vw] border-none border-none-black  md:flex-row-reverse md:flex-nowrap flex-wrap flex-col-reverse ">
    <div className="w-[100vw] md:w-1/4 xsm:p-4 md:p-0    md:mx-0 md:pt-4 mx-auto  md:text-left md:mt-0 ">
      <a className="flex title-font font-medium items-center xsm:justify-start  md:justify-start justify-center text-gray-900">
       <img src="/logo black.png" width={120}/>
      </a>
      <p className="mt-2 lg:text-[1vw] lg:leading-[1vw]  text-gray-500">
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </p>
    </div>
    <div className="flex-grow flex flex-wrap   md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full  flex flex-col items-center   border-black">
        
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
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none border-none-black ">

<nav className="list-none p-4   border-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center " >
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
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  border-none border-none-black ">
      <nav className="list-none p-4   border-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">

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
      <div className="lg:w-1/4  md:w-1/2 w-full flex flex-col items-center  sm:justify-center lg:justify-start border-none border-none-black ">
        
        <nav className="list-none p-4   border-black xsm:w-full md:w-auto flex flex-col xsm:items-start md:items-center ">
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
  <div className=" border border-[#242426] ">
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

    </div>
    <div>
      
    </div>
    <div className="flex justify-center py-2 bg-white">
      <div className="bot " ref={Bot} ><img  src="/caterpiller.png" className='lg:w-[180px] xsm:w-[100px]'/></div> <div className="text_2 border-none border-none-black xsm:text-[8.6vw] xsm:leading-[8vw] md:text-[5.6vw] md:leading-[8vw] mt-auto font-[800] tracking-tighter mb-4	">Keep smilin &apos; !<img src="/bigheary.png"className="inline w-[5vw] mb-3 mx-1"/></div></div>
    </>
}