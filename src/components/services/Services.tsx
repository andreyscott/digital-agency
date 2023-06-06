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

export const services = [
    {
        src: SMManagement,
        alt: 'Social Media Management',
        dataText: 'Management',
        title: 'Management',
        text: 'Potențialul rețelelor sociale este imens. Afacerile pot folosi Social Media pentru a-și atinge cu succes obiectivele, de la creșterea gradului de cunoaștere a afacerii până la creșterea numărului de vizite în site.'
    },
    {
        src: design,
        alt: 'Design',
        dataText: 'Design',
        title: 'Design',
        text: 'Design-ul grafic este un element cheie pentru stabilirea unei imagini puternice de brand care te va ajuta să te diferențiezi față de competiție.'
    },
    {
        src: copywriting,
        alt: 'Copywriting',
        dataText: 'Copywriting',
        title: 'Copywriting',
        text: 'Chiar dacă produsele sau serviciile tale au o calitate ridicată, este foarte important modul în care acestea sunt prezentate în fața clienților.'
    },
    {
        src: webDev,
        alt: 'Website Development',
        dataText: 'Websites',
        title: 'Website Build',
        text: 'Trăind în lumea digitală, un website este esențial pentru orice afacere. Având o prezență online puternică, în special un website, poate fi un avantaj pentru a genera mai multe venituri.'
    },
    {
        src: SEO,
        alt: 'SEO',
        dataText: 'SEO',
        title: 'SEO',
        text: 'Nu contează cât de bun este site-ul tău dacă oamenii potriviți nu îl pot găsi. Serviciile noastre de SEO te pot ajuta să fii văzut și să domini primele locuri pe internet.'
    },
    {
        src: ads,
        alt: 'Facebook & Instagram Ads',
        dataText: 'Ads',
        title: 'Ads',
        text: 'Procesul de promovare pe Facebook și Instagram va oferi afacerii tale boost-ul de care are nevoie pentru a atrage clienți noi și a mări traficul.'
    }
]

const Services = () => {
    return (
        
        <div className={styles.services} id='servicii'>
            <h1 className={styles.underline}>Te ajutăm cu...</h1>
            <div className={styles.servcontainer}>
                {services.map((service, id) => {
                    return (
                        <div key={id} className={styles.card}>
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