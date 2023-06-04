/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import Link from 'next/link'

import { FiArrowRight, FiMessageSquare } from 'react-icons/fi'

import arrow from '../../assets/hero__arrow.png'
import heroBanner from '../../assets/hero__banner.png'

export function Hero() {
  return (
    <section className='w-full pt-16 px-4 bg-digitux-text'>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-cover min-w-screen"
    >
    <div className="absolute inset-0 w-full h-full bg-black bg-opacity-75"></div>

    <div className="flex max-w-6xl mx-auto">
        <div className="container relative flex flex-col w-1/2 px-3 pb-1 text-2xl font-hairline text-white">
            <h2 className="relative z-20 text-xl font-extrabold leading-tight text-white">We provide<br/> The Digital Advantage
   </h2>
            <p className="relative z-20 block mt-4 text-xl">We've created the ultimate resource for turning your culture
                into a
                super-powered productivity machine by encouraging collaboration growth, and incentives!</p>
            <div className="flex mt-4">
                <a href="#_"
                    className="flex items-center self-start justify-center px-5 py-3 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-lg shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-8">Get
                    Started</a>
                <a href="#_"
                    className="flex items-center self-start justify-center px-5 py-3 mt-5 ml-5 text-base font-medium leading-tight text-indigo-500 transition duration-150 ease-in-out bg-gray-200 border-transparent rounded-lg shadow hover:bg-white focus:outline-none focus:border-gray-100 focus:shadow-outline-gray md:py-4 md:text-lg md:px-8">How
                    It Works</a>
            </div>
        </div>
        <div className="relative w-1/2 overflow-hidden rounded-lg shadow-2xl cursor-pointer group">
            <Image 
            src={heroBanner}
                            alt=""
                className="object-cover w-full h-full group-hover:opacity-75 transition duration-150 ease-in-out"
                width={3290}
                height={2193}
                 />

                
        </div>
    </div>
</div>
    </section>
  )
}
