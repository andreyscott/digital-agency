import React from 'react'
import Image from 'next/image'

// import css from style
import styles from '../../styles/service.module.css'

import SMManagement from '../../assets/social-media-management.png'
import SEO from '../../assets/SEO.png'
import ads from '../../assets/ads.png'
import design from '../../assets/design.png'
import webDev from '../../assets/web-dev.png'
import copywriting from '../../assets/copywriting.png'
// import digit from '../../assets/digit.svg'

export const services = [
    {
        src: design,
        alt: 'Design',
        dataText: 'Design',
        title: 'Design',
        text: 'Graphic design is a key element in establishing a strong brand image that will help you differentiate yourself from the competition.'
    },
    {
        src: webDev,
        alt: 'Website Development',
        dataText: 'Websites',
        title: 'Website Build',
        text: 'Living in the digital world, a website is essential for any business. Having a strong online presence, especially a website, can be an advantage to generate more income.'
    },
    {
        src: copywriting,
        alt: 'Copywriting',
        dataText: 'Copywriting',
        title: 'Copywriting',
        text: 'Even if your products or services are of high quality, how they are presented to customers is very important.'
    },
    {
        src: SEO,
        alt: 'SEO',
        dataText: 'SEO',
        title: 'SEO',
        text: "It doesn't matter how good your website is if the right people can't find it. Our SEO services can help you get seen and dominate the top spots on the internet."
    },
    {
        src: SMManagement,
        alt: 'Social Media Management',
        dataText: 'Management',
        title: 'Management',
        text: 'The potential of social media is immense. Businesses can use Social Media to successfully achieve their goals, from increasing business awareness to increasing website traffic.',
    },
    {
        src: ads,
        alt: 'Facebook & Instagram Ads',
        dataText: 'Ads',
        title: 'Ads',
        text: 'Facebook and Online ads are a great way to increase your brand awareness and generate more leads and sales.Which will give your business the boost it needs to attract new customers and increase traffic.'
    }
]

const Services = () => {
    return (
        
        <div className={styles.services} id='servicii'>
            <h1 className='mx-4 text-2xl md:text-3xl font-mono hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#3b5fe2] to-[#fff] transition-all duration-500 ease-in '>
                Our top class Services</h1>
            <div className={styles.servcontainer}>
                {services.map((service, id) => {
                    return (
                        <div
                        data-aos='zoom-in-up'
                        data-aos-duration='1000'
                        data-aos-easing='ease-in-out'
                        
                         key={id} className={styles.card}>
                            <div className={styles.img} data-text={service.dataText}>
                                <Image
                                width={120}
                                height={120}
                                className='image'
                                 src={service.src} 
                                 alt={service.alt} />
                            </div>
                            <div className={styles.content}>
                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Services