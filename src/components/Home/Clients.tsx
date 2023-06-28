import Image from 'next/image'

import logoMs from '../../assets/logo-microsoft-4096.png'
import logoGg from '../../assets/logo-google-4096.png'
import logoSp from '../../assets/logo-spotify-4096.png'
import logoTl from '../../assets/logo-tesla-1024.png'
import logoYh from '../../assets/logo-yahoo-4096.png'
import logoCa from '../../assets/logo-codecademy-4096.png'
import logoGp from '../../assets/logo-gympass-4096.png'
import logoSr from '../../assets/logo-spiral-4096.png'

export function Clients() {
  return (
    <section
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    
     className='w-full mt-32 px-4'>
      <h1 className='text-2xl font-bold'>Client we helped</h1>
      <div className='mt-7 xl:mt-12 overflow-x-auto scrollbar-hide flex items-center xl:justify-evenly gap-12'>
        <Image src={logoMs} loading='lazy' alt={'mircosoft'} className='w-32 h-full object-cover' />
        <Image src={logoGg} loading='lazy' alt={'google'} className='w-32 h-full object-cover' />
        <Image src={logoSp} loading='lazy' alt={'spotify'} className='w-32 h-full object-cover' />
        <Image src={logoTl} loading='lazy' alt={''} className='w-32 h-full object-cover' />
        <Image src={logoYh} loading='lazy' alt={''} className='w-32 h-full object-cover' />
        <Image src={logoCa} loading='lazy' alt={''} className='w-32 h-full object-cover' />
        <Image src={logoGp} loading='lazy' alt={''} className='w-32 h-full object-cover' />
        <Image src={logoSr} loading='lazy' alt={''} className='w-32 h-full object-cover' />
      </div>
    </section>
  )
}
