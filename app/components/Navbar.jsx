import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

export default function Navbar(props) {
  const [state] = useState(data);
  const [progress, setProgress] = useState(0);
  const [menu, setMenu] = useState(false);



    const onScrollbasic = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      const scrolledPercentage = ((scrolled / height) * 100) - 9;

      var bar = document.getElementById('nav__track');
      if (bar != null) {
        bar.style.width = scrolledPercentage+'%';
      }
      setProgress(scrolledPercentage);
    };

    useEffect(() => {
      window.addEventListener("scroll", onScrollbasic);
      return () => window.removeEventListener("scroll", onScrollbasic);
    }, []);

    const sections = {
      section_1: useRef(null),
      section_2: useRef(null),
      section_3: useRef(null),
      section_4: useRef(null),
      section_5: useRef(null),
      section_6: useRef(null),
    };



    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      Object.values(sections).forEach((ref) => {
        if (ref.current) observer.observe(ref.current);
      });

      return () => {
        Object.values(sections).forEach((ref) => {
          if (ref.current) observer.unobserve(ref.current);
        });
      };
    }, [sections]);



  return (
    <div className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#000]/50 backdrop-blur-md z-50 " >
    <div className={'w-full h-full flex flex-row items-center justify-between m-auto pl-[20px] '}>
        <a href="#section_1" className="m-5">
          <Image src={"/"+state.navLogo} alt="" width={200} height={40} className="cursor-pointer hover:animate-slowspin " />
        </a>
        <Button onClick={()=> setMenu(true)} className="md:hidden block transition-all duration-500 rounded-xl mr-5 p-[6px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">
          <svg id="hamburger" className="w-[50px] h-[30px]" viewBox="0 0 60 40">
            <g stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path  d="M10,7 L50,7 Z"></path>
              <path  d="M10,20 L50,20 Z"></path>
              <path  d="M10,33 L50,33 Z"></path>
            </g>
          </svg>
        </Button>


        <nav className="top-[15px] md:block hidden relative top-0 right-0 w-[55%] text-white z-10 h-[6rem] after:content after:absolute after:top-[1.7rem] after:left-0 after:w-full after:z-[-1] after:bg-[#fff]">

        <div className="md:grid hidden top-[-1px] left-[-30px] absolute z-50 text-[0.7rem]">
          <Button disabled={props.lang == 1 ? true:false} onClick={()=>props.setLang(1)} className=" transition-all duration-500 rounded-t-xl  p-[6px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">AR</Button>
          <Button disabled={props.lang == 2 ? true:false} onClick={()=>props.setLang(2)} className=" transition-all duration-500 rounded-b-xl  p-[6px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">EN</Button>
        </div>
          <small id="nav__track" className={"z-10 absolute top-[1.7rem] left-[0] h-[0.3rem]  bg-[red] bottom-0 before:left-[0] before:bg-[red] before:top-[-4px]  before:z-50 before:h-[5.5px] before:content before:absolute before:w-[0] rounded-[40px]"}></small>
          <div  className="relative w-[max(150rem, 200%)] pb-[0px] pl-[0px] p-[1.5rem] h-[6rem]" data-draggable>
            <ul className="justify-between list-image-none flex content-center m-[0px] p-[0px] after:content after:absolute after:top-[1.7rem] after:left-[0] after:w-[100%] after:h-[0.25rem] after:z-[-1] after:bg-[#fff] after:cursor-pointer after:rounded-[40px]">
              {state.menu.map((a,k)=>
                <li key={k}> <a href={"#"+a.url} className="min-w-[5rem] after:transform   text-sm after:content after:absolute after:top-0 after:left-[44%] after:w-[0.65rem] after:h-[0.65rem] after:bg-[red] after:rounded-full  relative block  pt-[1.25rem] px-[1rem] pb-[0.5rem] text-center text-white no-underline " data-link><span>{props.lan == 1? a.name_ar :a.name}</span></a> </li>
              )}
            </ul>
          </div>
        </nav>
    </div>

    <Modal  backdrop={'blur'}  placement={'center'} isOpen={Boolean(menu)}   onOpenChange={()=> setMenu(false)} classNames={{base: "focus:outline-none bg-[#000] dark:bg-[#000] text-[#fff] shadow-4xl m-10 rounded-xl",closeButton: "p-1 border-[#ef4444] border border-solid hover:bg-white/5 active:bg-white/10 z-[9] bg-[#000] right-0 top-0  rounded-none text-[2rem] rounded-tr-lg rounded-bl-lg",}}>
      <ModalContent >
        <ModalBody className="w-full grid">
        <a href="#section_1" className="m-2" onClick={()=> setMenu(false)}>
          <Image src={"/"+state.navLogo} alt="" width={120} height={20} className="cursor-pointer hover:animate-slowspin" />
        </a>

        <ul className={'m-0 w-full grid'} >
          {state.menu.map((a,k)=>
            <a  href={"#"+a.url} key={k} ><Button onClick={()=> setMenu(false)} key={k} className="md:hidden block transition-all duration-500  mr-5 p-[6px] border-b border-solid border-[#ef4444] text-[#ef4444] w-full"> <span>{props.lan == 1? a.name_ar :a.name}</span></Button></a>
          )}
        </ul>
        <ul className=" z-30 mb-3 justify-self-center mt-5 text-white flex width-fit" >
          {state.channels.map((a,k)=>
            <Button key={k} className={"hover:border-[#ef4444] hover:text-[#ef4444] transition-all duration-500 pt-[8px] pb-[5px] pr-[15px] pl-[15px] content-center bg-[#262626] rounded-full border border-[#000] " + (k < state.channels.length -1 && 'mr-[10px]')} href="#">
              <li>
                <Image width={15} height={15} alt=""  src={a.img} />
              </li>
            </Button>
            )}
        </ul>
        <ul className="w-full  justify-self-center text-white flex w-fit" >
          <Button href="#" className="w-full hover:shadow-3xl transition-all border-r border-solid border-[#ef4444] duration-500  rounded-l pr-[10px] pl-[10px] pt-[10px] pb-[10px] content-center bg-[#262626] rounded-s-2xl ">
            <li className="flex"> <Image alt={''} width={15} className="mr-2" height={15} src="callicon.svg" /> <label> {props.lan == 1? 'اتصل' :'Call'} </label> </li>
          </Button>
          <Button href="#" className="w-full hover:shadow-3xl transition-all duration-500  rounded-l pr-[10px] pl-[10px] pt-[10px] pb-[10px] content-center bg-[#262626] rounded-e-2xl rounded-s-none ">

            <li className="flex"> <Image alt={''} width={15} className="mr-2" height={15} src="qouticon.svg" /> <label className="text-nowrap"> {props.lan == 1? 'عرض سعر' :'Quote'} </label> </li>
          </Button>
        </ul>
        </ModalBody>
      </ModalContent>
    </Modal>

  </div>
);
}
