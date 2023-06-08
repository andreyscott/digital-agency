import { motion } from 'framer-motion'

import { Hero } from '../components/Home/Hero'
import { Clients } from '../components/Home/Clients'
import { ServicesWeOffer } from '../components/Home/ServicesWeOffer'
import { TeamSection } from '../components/Home/TeamSection'
import { OurProjects } from '../components/Home/OurProjects'
import { Tesimonials } from '../components/Testimonials'
import Services from '../components/services/Services'
import Faq from '../components/Faq'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='max-w-[1440px] w-full mx-auto'>
      <Hero />
      <Clients />
      <Services />
      {/* <ServicesWeOffer /> */}
      <TeamSection />
      <OurProjects />
    <Faq />
      <Tesimonials />
    </motion.main>
  )
}
