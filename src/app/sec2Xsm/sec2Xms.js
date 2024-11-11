import Slider from "../component/slider/slider"

export default function Sec2Xms(){
    return<>
    <div  className="bg border-t border-transparent pb-5">
<div className="text-[7vw] text-center my-10 text-white ">
<span className=' font-[900] tracking-tighter	mx-1 '>Fresh Spins:</span><span className=' font-[500] tracking-tighter	mx-1 '>New Releases</span> 
</div>
    <div>
    <Slider/>
    </div>
    <div className='mt-[3vw]'>
  <button className='text-[white] rounded-[50px] bg-[#a88add] text-[14px] py-2 leading-[] w-[70vw] mx-auto flex items-center justify-center ' >Discover the Vibes</button>
</div> 
    </div>
    </>
}