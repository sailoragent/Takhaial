import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'
import Image from "next/image";

export default function Why(props) {
  const [state] = useState(data);

  return (
    <section dir={props.lan == 1? 'rtl':'ltr'} id="section_3" className={'  min-h-[100vh] relative text-white flex justify-center items-center pt-[2rem] bg-[#000] z-[1]  relative py-[60px]'} >

    <div className="w-full bg-gradient-radial2 min-h-[80vh] content-center">

    <div className="md:container md:mx-auto md:grid md:grid-cols-5 gap-6 items-center">
      <Image alt="" height={130} width={230} src={"/"+state.battern} className="absolute  right-[-20px] z-[-10] "  />
      <div className="" >
      </div>
      <div className="col-span-3">
        <div className='flex items-start'>
          <h1  className={'font-bold text-white text-2xl mb-5 flex glitch-trans'} data-glitch={props.lan == 1? state.why_title_ar:state.why_title}>{props.lan == 1? state.why_title_ar:state.why_title}  </h1>
          <Image alt="" height={100} width={155} src={"/"+state.historicalLogo} className="mt-[5px] ml-[-10px]"  />
        </div>

        {(props.lan == 1? state.why_descr_ar:state.why_descr).split('.').map((a,k)=>
          <p key={k} className={"leading-relaxed content-end text-sm "} >{a}.</p>
        )}

      </div>
      <div className="" >
      </div>
    </div>


    </div>

  </section>
);
}
