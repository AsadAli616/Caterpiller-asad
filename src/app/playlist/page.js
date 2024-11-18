
import '../component/Playpause/playlist.css'
import Image from 'next/image';
import data from '../Arry.json'
import Link from 'next/link';
import NaV2 from '../component/nav2/nav2';
export default function Playlist(){


    return<>
    <div className='PLaylist_main_div'>

    
   <NaV2/>
    <div className=' my-6 w-[90vw] mx-auto flex md:flex-row xsm:py-2  flex-col md:p-4'>
        <div className=' md:w-[50%] text-[#453a5a] md:text-[3vw] md:leading-[3vw] xsm:py-2 md:py-0 text-[6vw] leading-[6vw] font-[900]'>
        <h1>FEATURED PLAYLIST</h1>

        </div>
        <div className=' flex md:justify-end text-[#453a5a]  md:w-[50%] xsm:py-2 md:py-0  '>
            <button className='border  border-[#453a5a] md:px-[8vw] px-[10vw] md:py-1'>
                Sorded by
            </button>
        </div>
    
    </div>
    <div className=' px-8 my-3   mx-auto w-[90vw] flex flex-wrap justify-center items-center'>
    {
        data.map((data1)=>(
            
        <div key={data1.id} className=' p-4     md:w-[25%] sm:w-[50%] xsm:w-[100%]'>
            <Link href={`/playlist/${data1.id}`}>
            <img src={data1.img}/>
            </Link>
            </div>
            ))
    }
    </div>
    
    </div>
    </>
}