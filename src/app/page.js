import Image from "next/image";
import Nav from "./component/nav/nav";
import Playpaue from "./component/Playpause/Playpause";
import Sec1 from "./component/sec1/sec1";
import Sec1part1 from './component/sec1part1/h1'
import '../app/globals.css'
import Sec2 from "./component/sec 2/Sec2";
import Disc1 from "./component/disc1/disc";
import Disc2 from "./component/disc2/disc2";
import Disc3 from "./component/disc3/disc3";
import Disc4 from "./component/disc4/disc4";
import Sec3 from "./component/sec3/sec3";
import Sec5 from "./component/sec5/sec5";
import Sec7 from "./component/sec7/sec7";


export default function Home() {
  return (
    <div className="">
      {/* <Sec1part1/> */}
            {/* <Sec1/> */}
      {/* <Sec2/> */}

      <div className="h-[65vw]">

<Sec1/>
</div>

      <div className="h-[70vw]">

<Sec2/>
</div>      
    <div className="h-[50vw]">

<Sec3/>
</div>

    {/* <Sec5/> */}
    {/* <Sec7/> */}
      {/* <Disc4/> */}

   </div>
  );
}
