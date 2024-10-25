import Glass_effect from '../glasseffect/Glass'
import './sec8.css'
export default function Sec8({text ,cloud}) {
  return<>
  
  
    <div className="border relative border-black w-[100vw] h-[100vh] ">
    <div className="absolute mt-[9vw]" >
    <img src="/Layer 2.png" className=" w-[100vw]"/>
    </div>
    <div className='absolute mt-[9.5vw] z-20'>

    
    <marquee   scrollamount="9" loop="infinite">  
        <div ref={text}  className='divv text-[#dae7b4] flex gap-3  font-syntheses leading-[7vw] tracking-tighter text-[5.5vw] font-[900]  '>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1  className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    <h1 className="">Join the Chill Crew</h1>
    </div>
            </marquee>
    </div>
    <div className='absolute mt-[9.5vw] z-10'>

    
<marquee   scrollamount="3" loop="infinite">  
    <div ref={cloud}  className='divvv w-[100vw] flex gap-[100vw] font-syntheses leading-[7vw] tracking-tighter text-[5.5vw] font-[900]  '>
<img src='/CLOUDS2.png' width={800} />
<img src='/CLOUDS2.png' width={800} />

</div>
        </marquee>
</div>

    
    
  <div className='absolute z-30 mt-[-10vw] w-[100vw] '>

            <img src="/monkey.png" className="w-[100vw]  "/>  
            </div>
            
  <div className='absolute z-40 top-[80%] left-[50vw]   '>

  <Glass_effect/>  
</div>
            
    </div>
    
  
  
  
  
  </>
}
