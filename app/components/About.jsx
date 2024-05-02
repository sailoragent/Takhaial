import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'

export default function About(props) {
  const [state] = useState(data);

  return (
    <section id="section_2" className={' min-h-[100vh] relative text-white flex justify-center items-center pt-[6rem] px-[20px] bg-[#000] z-[1]  relative py-[60px]'} >

    <div className="bg-gradient-radial absolute top-[-4px] left-0 right-0 bottom-[-4px] z-[0]"/>
    <div className="w-full  md:grid md:grid-cols-2 gap-6 z-[10]">
      <div />
      <div>
        <h1  className={'font-bold text-white text-3xl mb-5 glitch'} data-glitch= {props.lan == 1? 'الرؤية' :'VISION'}   >  {props.lan == 1? 'الرؤية' :'VISION'}</h1>
        <h2 className={"leading-relaxed content-end text-sm"}> {props.lan == 1? state.vision_ar : state.vision} </h2>

        <h1  className={'font-bold text-white text-3xl mt-10 mb-5 glitch'}  data-glitch={props.lan == 1? 'المهمة' :' MISSION'}  > {props.lan == 1? 'المهمة' :' MISSION'}</h1>
        <h2 className={"leading-relaxed content-end text-sm"}> {props.lan == 1? state.mission_ar : state.mission} </h2>
      </div>
    </div>
    <video autoPlay muted loop className="rotate-100 absolute  left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
      <source src={"/video/"+state.section2_video} type="video/mp4" />
    </video>
  </section>
);
}
