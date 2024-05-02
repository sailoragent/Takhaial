'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {data} from './data.js'

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Why from './components/Why';
import Products from './components/Products';
import History from './components/History';
import Sectors from './components/Sectors';
import Contact from './components/Contact';


export default function Home() {
  const [state] = useState(data);
  const [lang, setLang] = useState(0);
  useEffect(() => {
    window.addEventListener('load', function () {
      setTimeout(function () {
          document.getElementById('myVideo').play();
        }, 1000);

      setTimeout(function () {
          document.getElementById('content').classList.remove('opacity-0');
        }, 5000);
      setTimeout(function () {
          document.getElementById('actiontag').classList.remove('opacity-0');
        }, 6000);
    });
  }, []);

  return (
    <main className="h-full w-full " id="scroll-container">
        { <div  className={"h-full w-full fixed inset-0 z-[100] bg-[#000] transition duration-700 ease-in-out" + (lang ? ' pointer-events-none opacity-0':'')} >
            <div id="content" className={"justify-self-center fixed left-[50%] bottom-[18%] transform transform-navbar transition duration-500 opacity-0"} style={{transform: 'translate(-50%, 0px)',}}>
             <Image alt="takhaial"  height={20} width={20} className="w-full object-cover" src={"/"+state.nameLogo} />
            </div>
            <ul id="actiontag" className={"fixed left-[50%] transition duration-500 bottom-[10%] transform-navbar justify-self-center text-white flex w-fit opacity-0" } style={{transform: 'translate(-50%, 0px)',}}>
              <a className="mr-[10px] text-center hover:shadow-3xl transition duration-500 w-[100px] pr-[10px] pl-[10px] pt-[10px] pb-[10px] content-center bg-[#262626] rounded-2xl " onClick={()=> setLang(2)}  > <li> <label> English </label>  </li> </a>
              <a className="text-center hover:shadow-3xl transition duration-500 w-[100px] pr-[10px] pl-[10px] pt-[10px] pb-[10px] content-center bg-[#262626] rounded-2xl " onClick={()=> setLang(1)}  > <li> <label> Arabic </label>  </li> </a>
            </ul>

            <video id="myVideo" autoPlay className="rotate-100 absolute  left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
              <source src={"/video/"+state.intro_video} type="video/mp4" />
            </video>
        </div>}
        <Navbar   lan={lang} setLang={(e)=> setLang(e)} />
        <div className="">
          <Intro    lan={lang} />
          <About    lan={lang} />
          <Why      lan={lang} />
          <Products lan={lang} />
          <History  lan={lang} />
          <Sectors  lan={lang} />
          <Contact  lan={lang} />
        </div>
    </main>
  );
}
