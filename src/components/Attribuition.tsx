import Link from 'next/link'

export function Attribuition() {
  return (
    <div className='max-w-[1440px] w-full mx-auto my-6 px-4'>
      <p className='text-sm font-light text-center'>
        AfroDigit &copy; 2023 - Develope {' '}
        <Link
          href='http://github.com/andreyscott'
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold underline underline-offset-4 hover:text-digitux-primary transition-all duration-300'>
          {' '}
          Andreyscott
        </Link>
      </p>
    </div>
  )
}
