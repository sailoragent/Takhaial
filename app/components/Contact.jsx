import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

export default function Contact(props) {
  const [state] = useState(data);
  const [quote, setQuote] = useState(false);

  return (<>
    <section id="section_8" className={' mb-20 md:mb-0 min-h-screen relative text-white flex justify-center items-center pt-[6rem] px-[20px] bg-[#020815] z-[1] grid'} >
    <div className="bg-gradient-radial absolute top-0 left-0 right-0 bottom-0 z-[0]"/>

        <div className="z-30 text-center" >
          <Image alt="" className="m-auto" src="ctaicon.svg" height={80} width={80} />
          <h1 className="font-bold justify-self-center text-2xl" >{props.lan == 1 ? state.contact_title_ar : state.contact_title} </h1>
          <p className="mt-30 justify-self-center" >
            {props.lan == 1 ? state.contact_descr_ar : state.contact_descr}
          </p>
        </div>
        <ul className=" justify-self-center text-white flex w-fit justify-self-center z-30" >
          <Button href="#" className="w-[100px] mr-10 hover:shadow-3xl transition-all duration-500 w-[100px]  pr-[10px] pl-[10px] pt-[10px] pb-[10px] content-center bg-[#262626] rounded-2xl " >
            <li className="flex">
              <Image alt={''} className="mr-2" width={15} height={15} src={state.contact_img} />
              <label> {props.lan == 1 ? 'اتصل':'Call'} </label>
            </li>
          </Button>
          <Button className=" hover:shadow-3xl transition-all duration-500 w-fit  pr-[10px] pl-[10px] pt-[10px] pb-[10px] content-center bg-[#262626] rounded-2xl " >
            <li className="flex ">
              <Image alt={''} className=" mr-2" width={15} height={15} src="mailicon.svg" />
              <label className="text-nowrap"> {props.lan == 1 ? 'بريد الكتروني':'Email'} </label>
            </li>
          </Button>
        </ul>
        <Image src="cta.svg" alt="" width={600} height={600} className="place-self-center absolute z-0" />
        <div className="mb-10 mt-10 md:mt-[10px] z-30  justify-self-center relative">
          <form className="">
            <div className={'grid-cols-3'} >
              <input
                type="text"
                className="md:w-auto w-full p-[10px] bg-[#262626] rounded-xl mr-[10px] mb-[10px] backdrop-blur-md bg-[#262626]"
                placeholder={props.lan == 1 ? 'الاسم' : "Name"}
              />
              <input
                type="text"
                className="md:w-auto w-full p-[10px] bg-[#262626] rounded-xl mr-[10px] mb-[10px] backdrop-blur-md bg-[#262626]"
                placeholder={props.lan == 1 ? 'الرقم' : "Phone"}
              />
              <input
                type="email"
                className="md:w-auto w-full p-[10px] bg-[#262626] rounded-xl mb-[10px] backdrop-blur-md bg-[#262626]"
                placeholder={props.lan == 1 ? 'البريد الالكروني' : "Email"}
              />
            </div>
            <textarea
              placeholder={props.lan == 1 ? 'الرسالة' : "Messsage"}
              className="w-full p-[10px] bg-[#262626] rounded-xl mr-[10px] mb-[10px] backdrop-blur-md bg-[#262626]"
              rows="3"
            ></textarea>
            <Button type="submit" className="transition-all duration-500 w-fit rounded-xl  px-[20px] py-[10px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">
              {props.lan == 1 ? 'ارسال' :'Send'}
            </Button>
          </form>
        </div>
        <ul className=" z-30 mb-3 justify-self-center text-white flex width-fit" >
          {state.channels.map((a,k)=>
            <Button key={k} className={"hover:border-[#ef4444] hover:text-[#ef4444] transition-all duration-500 pt-[8px] pb-[5px] pr-[15px] pl-[15px] content-center bg-[#262626] rounded-full border border-[#000] " + (k < state.channels.length -1 && 'mr-[10px]')} href="#">
              <li>
                <Image width={15} height={15} alt=""  src={a.img} />
              </li>
            </Button>
            )}
        </ul>
        <p className="whitespace-break-spaces z-30 mb-3 justify-self-center text-white flex width-fit" > © 2024 <a>Takhaial.tech</a> All rights reserved. </p>
        {state.section6_video && <video autoPlay muted loop className=" absolute  left-0 z-[-1] top-[0] h-[100vh] bottom-[0] w-full  object-cover">
          <source src={"/video/"+state.section6_video} type="video/mp4" />
        </video>}
    </section>


    <Modal  backdrop={'blur'}  placement={'center'} isOpen={Boolean(quote)} onOpenChange={()=> setQuote(false)} classNames={{base: "focus:outline-none bg-[#000] dark:bg-[#000] text-[#fff] shadow-4xl m-10 rounded-xl",closeButton: "p-1 border-[#ef4444] border border-solid hover:bg-white/5 active:bg-white/10 z-[9] bg-[#000] right-0 top-0  rounded-none text-[2rem] rounded-tr-lg rounded-bl-lg",}}>
      <ModalContent >
        <ModalBody className="w-full grid">
        <a href="#section_1" className="m-2" onClick={()=> setQuote(false)}>
          <Image src={"/"+state.navLogo} alt="" width={120} height={20} className="cursor-pointer hover:animate-slowspin" />
        </a>


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


    <Button href="#" className="overflow-visible	text-center w-fit h-fit bg-[#25d366] rounded-full content-center z-10 fixed left-5 bottom-5" >
      <Image alt="" width={55} height={55} src="wicon.svg" />
    </Button>

    <div className={'rounded-2xl fixed z-50 bottom-[10px] w-[190px] right-[10px] bg-[#000] border-red-500 border-red border border-solid'} >
    <h2 className="text-white my-[5px] mx-[10px]">{props.lan == 1? 'روابط سريعة':'Quick action'}</h2>
    <ul className="w-full justify-self-center text-white flex w-fit" >
      <Button href="#" className="hover:shadow-3xl transition-all duration-500 w-[100px] rounded-l pl-[10px] py-[5px] content-center bg-[#262626] rounded-s-2xl ">
        <li className="flex"> <Image alt={''} width={15} className="mr-2" height={15} src="callicon.svg" /> <label> {props.lan == 1? 'اتصل' :'Call'} </label> </li>
      </Button>
      <Button href="#" className="hover:shadow-3xl transition-all duration-500 w-[100px] rounded-l pl-[10px] py-[5px] content-center bg-[#262626] rounded-e-2xl rounded-s-none ">
        <li className="flex" onClick={()=> setQuote(true)}> <Image alt={''} width={15} className="mr-2" height={15} src="qouticon.svg" /> <label className="text-nowrap"> {props.lan == 1? 'عرض سعر' :'Quote'} </label> </li>
      </Button>
    </ul>
  </div>
  </>);
}
