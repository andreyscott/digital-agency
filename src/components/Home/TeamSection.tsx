import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { SwiperButton } from '../Swiper/SwiperButton'

import { TeamMemberCard } from '../Cards/TeamMemberCard'

import data from '../../data/dataMockup.json'

export function TeamSection() {
  return (
    <section className='w-full bg-black mt-32 px-4 xl:flex items-center lg:justify-between gap-7 xl:gap-48'>
      <div 
      data-aos='zoom-in-right'
      data-aos-duration='1000'
      data-aos-easing='ease-in-out'
      
      className='max-w-[540px] xl:mb-20 md:flex-1'>
        <h2 className='xl:text-[22px] font-bold leading-relaxed'>
          The Team behind AfroDigit
        </h2>
        <h1 className='mt-4 text-[22px] xl:text-[34px] font-bold'>
          A creative team who are excited to help you with your idea
        </h1>
        <p className='mt-6 text-lg text-white/80'>
        Our skilled team of digital product creators will take your idea to the next level, raising the quality of your product
        </p>
      </div>
      <Swiper
      autoplay={{
        delay: 2000,
      }}
       className='flex-1'>
        {data.teamMembers.map(props => (
          <SwiperSlide

           key={props.id}
           data-aos='fade-up'
            data-aos-duration='1500'
            data-aos-easing='ease-in-out'
            className='flex justify-center gap-9'>
            <TeamMemberCard {...props} />
          </SwiperSlide>
        ))}
        <SwiperButton />
      </Swiper>
    </section>
  )
}
