import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Attribuition } from '../components/Attribuition'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../styles/global.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
		AOS.init({
			delay: 400,
			duration: 800,
		});
	});
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='keywords'
          content='seo, react, ux-design,mobile, webdev, webdevelopment, nextjs'
        />
        <title>AfroDigit</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <Attribuition />
    </>
  )
}
