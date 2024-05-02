import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'
import {Button} from "@nextui-org/react";

export default function Intro(props) {
  const [state] = useState(data);
  return (<section id="section_1" className={'min-h-[100vh] relative text-white flex justify-center items-center pt-[6rem] px-[20px] bg-[#000] z-[1]  relative py-[60px]'} >
    <div className="bg-gradient-radial absolute top-0 left-0 right-0 bottom-0 z-[0]"/>

    <div className="md:container md:mx-auto self-end z-[10]">
      <div className=" w-full  md:grid md:grid-cols-4 gap-6 items-end ">
        <h1 className="grid-cols-1 text-right leading-7 text-4xl font-bold justify-self-right">
          {(props.lan == 1 ? state.title_ar :state.title).split(' ').map((a,k)=>
            <span key={k} className="glitch-wrapper ">
              <span className="glitch-trans block" data-glitch={a}>{a}</span> <br />
            </span>
          )}
        </h1>
        <div className="col-span-3">
          <h2 className="content-center text-xl max-w-[630px]">
            {props.lan == 1? state.about_ar :state.about}
          </h2>
          <Button href={state.pdfProfile} target="_blank" className="block mt-[10px] transition-all duration-500 w-fit rounded-xl  px-[20px] py-[10px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">{props.lan == 1? 'تحميل ملف الشركة':'Download Profile'}</Button>
        </div>
      </div>
    </div>

    <video autoPlay muted loop className="rotate-100 absolute  left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
      <source src={"/video/"+state.section1_video} type="video/mp4" />
    </video>
  </section>);
}
