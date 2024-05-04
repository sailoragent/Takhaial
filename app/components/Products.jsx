import React, { useEffect, useRef, useState } from "react";
import {data} from '../data.js'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";

export default function Products(props) {
  const [state] = useState(data);
  const [product, setProduct] = useState(null);

  return (<>
    <Modal  backdrop={'blur'} size="md" placement={'center'} isOpen={Boolean(product)}   onOpenChange={()=> setProduct(false)} classNames={{base: "focus:outline-none bg-[#000] dark:bg-[#000] text-[#fff] shadow-4xl m-10 rounded-xl",closeButton: "border-[#ef4444] border border-solid hover:bg-white/5 active:bg-white/10 z-[9] bg-[#000] right-0 top-0  rounded-none text-[2rem] rounded-tr-lg rounded-bl-lg",}}>
      <ModalContent>
        <ModalBody>
        {state.products.filter(e=>e==product).map((ser, key) => (
          <video autoPlay muted loop className="rotate-100  rounded-xl px-0 left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
            <source src={"/video/sec2.mp4"} type="video/mp4" />
          </video>
        ))}
        </ModalBody>
      </ModalContent>
    </Modal>

    <section id="section_4" className={'min-h-[100vh] content-center relative text-white flex justify-center items-center pt-[6rem] pb-[2rem] px-[20px] bg-[#000] z-[1] grid'}>
    <div className="bg-gradient-radial2 absolute top-[-4px] left-0 right-0 bottom-[-4px] z-[0]"/>
      <h1 className="font-bold justify-self-center text-2xl mb-4" >{props.lan == 1? state.products_title_ar : state.products_title} </h1>
      <div className="md:container  px-10 md:mx-auto">
        <div className="w-full  md:grid md:grid-cols-2 gap-6">
          {state.products.map((ser, key) => (
            <div key={key} className={'relative md:mb-0 mb-5 '}>
              <div className="hover:scale-105 grid items-center  border border-solid border-[red] rounded-xl hover:shadow-3xl transition-all duration-500 grid relative content-end hover:bg-[#000] hover:shadow-3xl group/item" key={key} >

              <div className={'flex p-4 items-center'}>
                {false && <Image alt="" width={50} height={50} src={ser.icon} />}
                <h1 className="text-center font-bold text-7xl  ml-[10px] glitch" data-glitch={props.lan == 1? ser.title_ar:ser.title}>{props.lan == 1? ser.title_ar:ser.title} </h1>
              </div>
              <p className="p-4  group-hover/item:text-base transition-all duration-500 transition-all duration-500  text-xs  group/edit  overflow-hidden   ">
                {props.lan == 1? ser.description_ar :ser.description}
              </p>
              <div className="flex">
                <Button onClick={(e)=> setProduct(ser)} className="flex w-full transition-all duration-500  rounded-bl-xl  px-[20px] py-[10px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">
                  {props.lan == 1? 'مشاهدة':'watch'}  <Image alt={''} width={15} className="ml-2" height={15} src="watch.svg" />
                </Button>
                <Button onClick={(e)=> setQuote(ser)} className="flex w-full transition-all duration-500  rounded-br-xl  px-[20px] py-[10px] border border-solid border-[#ef4444] text-[#ef4444] bg-[#262626]">
                  {props.lan == 1? 'عرض سعر':'quote'}  <Image alt={''} width={15} className="ml-2" height={15} src="qouticonrev.svg" />
                </Button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      <video autoPlay muted loop className="rotate-100 absolute  left-0 z-[-1] top-0 bottom-0 w-full h-full object-cover">
        <source src={state.section5_video} type="video/mp4" />
      </video>
    </section>

  </>);
}
