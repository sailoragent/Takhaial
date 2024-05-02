import { React } from 'react';
import { useSwiper } from 'swiper/react';
import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function SlideNextButton(props) {
  const swiper = useSwiper();

  return (<>
    <div className="absolute z-50  top-1   flex right-5 lg:grid lg:left-auto lg:left-10 ">
      <button className="h-fit" onClick={() => swiper.slidePrev()}>
        <i   className="  mb-3 block h-[40px] w-[40px] border border-solid border-[red] bg-white rounded-full hover:bg-[red] transition-all duration-500 p-[5px]">
          <Image alt="" width={40} height={40} src="lefticon.svg" />
        </i>
      </button>
      <button className="h-fit" onClick={() => swiper.slideNext()}>
        <i   className=" block h-[40px] w-[40px] border border-solid border-[red] bg-white rounded-full hover:bg-[red] transition-all duration-500 p-[5px]">
          <Image alt="" width={40} height={40} src="righticon.svg" />
        </i>
      </button>
    </div>

    <div className="relative before:content before:h-[150px] before:w-[15%] before:z-50 before:absolute before:bottom-[-20px] before:bg-gradient-to-r from-[#000] to-[rgba(244,244,244,1) 35%] after:content after:h-[150px] after:w-[15%] after:z-50 after:absolute after:bottom-[-20px] after:right-0 after:bg-gradient-to-l from-[#000] to-[rgba(244,244,244,1) 35%]">
     <Carousel showDots={false} arrows={true} responsive={{superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 }, desktop: { breakpoint: { max: 3000, min: 1024 }, items: 7 }, tablet: { breakpoint: { max: 1024, min: 464 }, items: 7 }, mobile: { breakpoint: { max: 464, min: 0 }, items: 5 } }} className="relative after:content after:h-[1px] after:bg-[red] after:absolute after:left-[0] after:right-[0] after:bottom-[50px]">
       {props.history.map((a, k) => (
         <div key={k} onClick={()=> swiper.slideTo(k)} className={'inline-block cursor-pointer leading-tight w-[50px] pt-[130px] pr-[15px]   align-bottom text-center font-bold relative before:content before:m-[auto]  before:absolute before:left-0 before:right-0 before:bottom-[102px] before:rounded-full transition-all duration-500 after:content after:h-[40px] after:w-[1px] after:m-[auto] after:bg-[red] after:absolute after:left-0 after:right-0 after:bottom-[52px] ' + (Boolean(props.activeStep === k) ?(' before:h-[15px] before:w-[15px] before:bg-[red]  text-[red]'):'text-white before:h-[5px] before:w-[5px] before:bg-[#fff]')}>
           <label >{a.year}</label>
         </div>
       ))}
     </Carousel>
   </div>
  </>);
}
