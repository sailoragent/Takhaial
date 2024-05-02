import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";
import Image from "next/image";

export default function Sectors(props) {
  const [state] = useState(data);
  const [modal, setModal] = useState(false);

  return (<>
    <Modal classNames={{ base: "focus:outline-none bg-[#000] dark:bg-[#000] text-[#fff] shadow-4xl m-10 rounded-xl",closeButton: "border-[#ef4444] border border-solid hover:bg-white/5 active:bg-white/10 z-[9] bg-[#000] right-0 top-0  rounded-none text-[2rem] rounded-tr-lg rounded-bl-lg",}} backdrop={'blur'} size="md" placement={'center'} isOpen={Boolean(modal)}   onOpenChange={()=> setModal(false)}>
      <ModalContent>
        <ModalBody>
          {state.sectors.filter(e=>e==modal).map((ser, key) => (
            <div key={key} className={'relative inline-table md:grid grid-cols-2 gap-6'}>
              <video autoPlay muted loop className="rotate-100  rounded-xl px-0 left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
                <source src={"/video/"+ser.video} type="video/mp4" />
              </video>
              <div className="min-h-[250px] border border-solid border-[red] p-5 rounded-xl transition-all duration-500 grid relative content-end hover:bg-[#000] group/item" key={key} >
                <Image alt="" width={50} height={50} src={ser.icon} />
                <h1 className="font-bold text-larg mt-[10px] glitch" data-glitch={props.lan == 1? ser.title_ar : ser.title}>{props.lan == 1? ser.title_ar : ser.title} </h1>
                <p className="m-0 transition-all duration-500 transition-all duration-500  text-lg my-[10px] group/edit  group-hover/item:h-[100%]  ">
                  {props.lan == 1? ser.description_ar :ser.description}
                </p>
              </div>
            </div>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>

    <section id="section_6" className={'md:container md:mx-auto content-center min-h-[100vh] relative text-white flex justify-center items-center pt-[6rem] pb-[2rem] bg-[#000] z-[1] grid'}>
    <h1 className="font-bold justify-self-center text-2xl mb-4 glitch-trans" data-glitch={props.lan == 1? state.sectors_title_ar : state.sectors_title} >{props.lan == 1? state.sectors_title_ar : state.sectors_title} </h1>
    {state.sectors_descr && <p className="mt-[30px] justify-self-center"> {props.lan == 1? state.sectors_descr_ar : state.sectors_descr} </p>}

    <div className="w-full md:grid md:grid-cols-3 gap-6 items-center">
      {state.sectors.map((ser, key) => (
        <div key={key} className={'relative md:mb-0 mb-5 '}>
          {false && <video autoPlay muted loop className="rotate-100 absolute rounded-xl px-0 left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
            <source src={"/video/"+ser.video} type="video/mp4" />
          </video>}
          <div className="overflow-hidden min-h-[200px] border border-solid border-[red] p-5 rounded-xl hover:shadow-3xl transition-all duration-500  relative hover:bg-[#000] group/item" key={key} >
            <Image alt="" className="min-h-[80px]" width={50} height={50} src={ser.icon} />
            <h1 className="font-bold text-larg glitch" data-glitch={props.lan == 1? ser.title_ar :ser.title}>{props.lan == 1? ser.title_ar :ser.title} </h1>
            <p className="transition-all duration-500 transition-all duration-500  text-xs group-hover/item:my-[10px] opacity-0 group/edit mb-[-100%] overflow-hidden  group-hover/item:mb-[0]  group-hover/item:opacity-[1]  ">
              {props.lan == 1? ser.description_ar :ser.description}
            </p>
            <Button onClick={(e)=> setModal(ser)} className="mb-[-60px] opacity-0  group-hover/item:opacity-[1] group-hover/item:mb-0 mt-3 transition-all duration-500 w-fit rounded-xl  px-[20px] py-[10px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">
              {props.lan == 1? 'مشاهدة' :'watch a demo'}
            </Button>
          </div>
        </div>
      ))}
    </div>
    </section>
  </>);
}
