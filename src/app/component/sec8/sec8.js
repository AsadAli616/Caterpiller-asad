import Glass_effect from '../glasseffect/Glass'
import './sec8.css'
export default function Sec8({text ,cloud}) {
  return<>
  
  
    <div className="border relative border-black lg:w-[100vw] xsm:h-[40vh] 3xms:h-[45vh] 2xms:h-[50vh] lg:h-[100vh] ">
    <div className="absolute mt-[9vw]" >
    <img src="/Layer 2.png" className="md:h-auto md:w-[100vw] xsm:h-[30vh] 3xms:h-[35vh] 2xms:h-[40vh] xsmxsm:w-auto"/>
    </div>
    <div className= ' overflow-x-hidden absolute md:mt-[9.5vw] xsm:mt-[20.5vw] z-20'>

    
    {/* <marquee   scrollamount="9" loop="infinite">   */}
        <div ref={text}  className='marquee-text1 text-[#dae7b4] flex gap-[10vw]  font-syntheses leading-[7vw] tracking-tighter text-[5.5vw] font-[900]  '>
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
            {/* </marquee> */}
    </div>
    <div className='absolute  overflow-x-hidden mt-[9.5vw] z-10'>

    
{/* <marquee   scrollamount="3" loop="infinite">   */}
    <div ref={cloud}  className='marquee-text w-[100vw] flex gap-[100vw] font-syntheses leading-[7vw] tracking-tighter text-[5.5vw] font-[900]  '>
<img src='/CLOUDS2.png' width={800} />
<img src='/CLOUDS2.png' width={800} />

</div>
        {/* </marquee> */}
</div>

    
    
  <div className='absolute z-30 md:mt-[-10vw] w-[100vw] '>

            <img src="/monkey.png" className="lg:w-[100vw] md:flex xsm:hidden   "/> 
            <img src="/moonkeyXsm.png" className="lg:w-[100vw] md:hidden xsm:flex   "/>  
            </div>
            
  <div className='absolute z-40 top-[80%] left-[50vw] xsm:hidden lg:flex  '>

  <Glass_effect/>  
</div>
            
    </div>
    
  
  
  
  
  </>
}
