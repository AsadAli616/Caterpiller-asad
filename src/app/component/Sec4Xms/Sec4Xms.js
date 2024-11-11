
export default function Sec4Xms({cdRef,img1,div1}){
    return<>
    <div className="border relative flex justify-center items-center border-black bg-black h-[100vh] w-[100vw]">
    
    <div className='border-none border-none-white  items-center flex justify-center '><img src='/cd.png' ref={cdRef} className='bg-transparent z-[4]'  width={200}/><div ref={div1} className='w-[200px] bg-[#a88add]  h-[200px] rounded-full border-none absolute '></div></div>
    <div ref={img1} className='border-none border-none-white absolute h-full items-center  top-[150vh] z-[5] '><img  src='/sec6video2.png'  className='img2' width={250}/></div>

    </div>
    </>
}