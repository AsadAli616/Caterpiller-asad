import Image from "next/image";
import './Glass.css'
export default function Glass_effect(){
    return<>
    <div className="divv border py-6 px-[4.5vw] rounded-[15px] border-white w-fit flex mx-auto flex-col " >
        <div className="text-center py-2 text-white">
        <span className="font-[900] tracking-tighter text-[3vw]">Join the </span>
        <span className="font-[500] tracking-tighter text-[3vw]">Chill Crew</span>
        </div>
        <div className=" flex px-4 py-2 ">
            <Image src={"/YOUTUBE.png"} className="mr-10 " width={30} height={10}/>
            <Image src={"/Group asad.png"} width={300} height={300}/>
      
        </div>

    </div>
  </>
}
