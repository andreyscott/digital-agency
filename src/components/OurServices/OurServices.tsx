import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SwiperButton } from '../Swiper/SwiperButton'

import { ServiceCardDetailed } from '../Cards/ServiceCardDetailed'

import servmob from '../../assets/ser-mob.jpg'
import servdesign from '../../assets/servi-design.jpg'
import servweb from '../../assets/ser-web.jpg'
import servbran from '../../assets/bran.jpg'
import servImg from '../../assets/business.jpg'

export function OurServices() {
  const dataServices = [
    {
      id: 1,
      title: 'UI/UX and Web Design',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servdesign
    },
    {
      id: 2,
      title: 'Web/App Development',
      description:
        'We provide Software Development Services to clients at any stage of business, be it a startup launching their MVP, mid-size businesses developing new or existing projects or large firms maintaining and expanding their offerings.',
      imgUrl: servweb
    },
    {
      id: 3,
      title: 'Marketing Digital, Social Media',
      description:
      'We provide Digial Marketing Services and brand promotion for your business. At any stage of business, be it a startup launching their MVP, mid-size businesses developing new or existing projects or large firms maintaining and expanding their offerings.',
      imgUrl: servbran
    },
    {
      id: 4,
      title: 'Brand Strategy & Art Direction',
      description:
      'We provide out of the box Brand Strategy & Art Direction for your business. A strong brands is a key to success. ',
       imgUrl: servImg
    },
    {
      id: 5,
      title: 'Visual Identity Logo Brand',
      description:
        'Visual Identity Logo Brand is a key to success. With that comes the need for a unique, professional logo design that will represent your company’s vision. We provide Logo Design Services to clients at any stage of business, be it a startup launching their MVP, mid-size businesses developing new or existing projects or large firms maintaining and expanding their offerings.',
      imgUrl: servmob
    },
    {
      id: 6,
      title: 'Video / Ads Production',
      description:
        'With a team of the best Digital Product Designer In the world at your hand , their goal is to create usefull andeasy to use products for you potentials users',
      imgUrl: servImg
    },
  ]
  return (
    <section 
    data-aos='flip-right'
    data-aos-duration='1000'
    data-aos-delay='100'
    data-aos-once='true'
    data-aos-easing='ease-in-out'
    className='w-full mt-40 px-4'>
      <h2 className='xl:text-[22px] font-semibold'>Our Services</h2>
      <Swiper>
        {dataServices.map(props => (
          <SwiperSlide key={props.id}>
            <ServiceCardDetailed {...props} />
          </SwiperSlide>
        ))}
        <SwiperButton />
      </Swiper>
    </section>
  )
}
