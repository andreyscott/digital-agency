import Link from 'next/link'
import {
  FiFacebook,
  FiInstagram,
  FiSend,
  FiTwitter,
  FiGithub
} from 'react-icons/fi'

export function Footer() {
  const socialLinks = [
    { id: 1, icon: <FiFacebook size={28} />, linkLabel: '' },
    { id: 2, icon: <FiInstagram size={28} />, linkLabel: '@itsandrey' },
    { id: 3, icon: <FiTwitter size={28} />, linkLabel: '@Andreyscott247' },
    { id: 4, icon: <FiGithub size={28} />, linkLabel: '@Andreyscott' },
  ]
  const navLinks = [
    { id: 1, linkUrl: '/about', linkLabel: 'About Us' },
    { id: 2, linkUrl: '', linkLabel: 'Our Service' },
    { id: 3, linkUrl: '', linkLabel: 'Project' },
    { id: 4, linkUrl: '', linkLabel: 'Contact' }
  ]

  return (
    <footer className='max-w-[1440px] w-full mx-auto mt-40 mb-5 px-4 flex flex-col sm:flex-row items-center sm:items-start justify-between'>
      <div className='flex lg:gap-16 xl:gap-32'>
        <div className='max-w-xl md:max-w-[400px] flex flex-col justify-center items-center'>
          <h1 className='text-[32px] font-semibold'>AfroDigit</h1>
          <ul className='mt-4 flex gap-4'>
            {socialLinks.map(({ id, icon, linkLabel }) => (
              <li key={id} className='flex items-center gap-2'>
                {icon}
              </li>
            ))}
          </ul>
          <p className='mt-4  text-center text-sm'>
            AfroDigit is a Digital agency that create User centred Product that
            help her client to evolve
          </p>
        </div>
      </div>
              <div className='hidden '>
          <h1 className='text-lg font-semibold'>About Us</h1>
          <ul className='mt-6 flex flex-col gap-4'>
            {navLinks.map(({ id, linkUrl, linkLabel }) => (
              <li key={id}>
                <Link
                  href={linkUrl}
                  className='hover:font-semibold hover:border-b-2 ease-in-out duration-150'>
                  {linkLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      <div className='flex lg:gap-16 xl:gap-32'>

        <div className='max-w-xl mt-12 sm:mt-0'>
          <h1 className='text-lg font-semibold'>Get In touch with Us</h1>
          <p className='mt-4 text-sm'>
            Need Answers? Need help ? Just email us
          </p>
          <label className='relative'>
            <input
              type='email'
              placeholder='Your email'
              className='w-full mt-8 py-2 px-5 text-black rounded border border-[#767676]'
            />
            <FiSend className='absolute top-1 right-1 text-digitux-primary' />
          </label>
        </div>
      </div>
    </footer>
  )
}
