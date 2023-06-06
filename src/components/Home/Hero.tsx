/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Image from 'next/image'
import Link from 'next/link'

// import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'

import heroBanner from '../../assets/hero__banner.png'
import teamImage from '../../assets/team-member-01.jpg'

export function Hero() {
  return (
    <section className='w-full pt-16 px-2'>
      <div className="  overflow-hidden flex flex-col items-center justify-center min-h-screen bg-cover min-w-screen"
    >

    <div className="flex flex-col md:flex-row max-w-6xl px-2 py-14 mx-auto">
        <div className="flex flex-col w-1/2 flex-wrap pb-1 text-2xl text-white">
            <h3 className="text-sm flex-wrap  md:text-xl lg:text-2xl font-extrabold leading-loose text-white uppercase m-0 p-0 ">
              We provide 
              <br /> 
              <span className='text-digitux-pblue text-3xl md:text-4xl lg:text-3xl font-mono'>The Digital Advantage
              </span>
   </h3>
   <h1 className="text-[40px] xl:text-5xl font-extrabold leading-loose text-white mb-1 ">
                By bringing your <br/> Ideas to life         
            </h1>
            <p className="font-mono w-96 sm:text-lg text-base md:text-xl">
           We Approach your Audience Through Digital Marketing
We analyze your business and choose the best strategies to promote it and attract more customers.
 </p>
            <div className="flex mt-4">
                <a href="#_"
                    className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-transparent border-indigo-600 border rounded-lg shadow hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-8">Get
                    Started</a>
            </div>
        </div>
        <div className="w-1/2 overflow-hidden rounded-lg shadow-2xl cursor-pointer group mt-16 sm:mt-3 md:mt-0 md:px-0 ">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
        <Image
                src='/banner-right.png'
                alt=""
                className="object-cover w-full h-full group-hover:opacity-75 transition duration-150 ease-in-out"
                width={3000}
                height={2000}
                  />

        </SwiperSlide>
        <SwiperSlide>
        <Image
                src='/banner-right2.png'
                alt="team show case work on a white board"
                className="object-cover w-full h-full group-hover:opacity-75 transition duration-150 ease-in-out"
                width={3000}
                height={2000}
                  />

        </SwiperSlide>
        <SwiperSlide>

            <Image 
            src={heroBanner}
                            alt="Team working"
                className="object-cover w-full h-full group-hover:opacity-75 transition duration-150 ease-in-out"
                width={3000}
                height={2000}
                 />
        </SwiperSlide>
        </Swiper>


                
        </div>
    </div>
</div>
    </section>
  )
}
