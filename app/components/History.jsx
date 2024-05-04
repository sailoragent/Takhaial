import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'
import { Swiper, SwiperSlide, Controller } from 'swiper/react';
import SlideNextButton from './SlideNextButton';
import Image from "next/image";
import 'swiper/css';

export default function History(props) {
  const [state] = useState(data);
  const [activeStep, setActiveStep] = useState(0);

  return (<div id="section_5" className={'min-h-[100vh] relative text-white justify-center items-center pt-[6rem] px-[20px] bg-[#000] z-[1]  relative py-[60px] '} >
    <div className="bg-gradient-radial-sec absolute top-[-4px] left-0 right-0 bottom-[-4px] z-[0]"/>

    <div className="md:container md:mx-auto">

    <div className="text-center z-[10] relative">
      <Image alt="" height={90} width={90} src={"/"+state.verticalLogo} className="m-auto mb-2"  />
      <h1 className={'font-bold text-l'} >{state.success_title}</h1>
    </div>


      <div className="z-[10] relative">
          <div className="lg:ml-[90px] ">
            <Swiper slidesPerView={1}  onSlideChange={(e) => setActiveStep(e.activeIndex)}>
              <SlideNextButton activeStep={activeStep} setActiveStep={setActiveStep} history={state.history}/>
              {state.history.map((a, k) => (
                <SwiperSlide key={k} virtualIndex={k} className="">
                  <div className="flex items-baseline">

                  <div className="leading-tight mb-[30px] font-bold text-7xl text-white glitch" data-glitch={a.year}>{a.year}</div>
                    {state.clients.filter(e=>e.year==a.year).map((c, key) => (
                      <div key={key} className={'ml-2 content-center'+ (activeStep === k ? 'transition duration-700 delay-'+(key+2)+'00 opacity-1' :'opacity-0') }>
                        <Image className="m-auto" alt="" width={60} height={60} src={'/clients/'+c.img} />
                      </div>
                    ))}
                  </div>
                  <div className="">
                    <p className={'leading-tight mb-[15px] text-l text-white '}>{props.lan == 1? a.description_ar :a.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>

      <h1 className={'text-center mt-10 font-bold text-l text-white relative glitch-noise'} data-glitch={props.lan == 1?  state.success_descr_ar: state.success_descr} >{props.lan == 1?  state.success_descr_ar: state.success_descr}</h1>
      </div>
      <video autoPlay muted loop className="rotate-100 absolute  left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
        <source src={state.section3_video} type="video/mp4" />
      </video>
  </div>);
}
