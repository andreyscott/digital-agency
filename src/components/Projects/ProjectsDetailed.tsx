import { ProjectCardDetailed } from '../Cards/ProjectCardDetailed'

import proj01 from '../../assets/delivery-w.webp'
import proj02 from '../../assets/project-02.png'
import proj04 from '../../assets/project-04.png'
import proj05 from '../../assets/project-05.png'

import proj06 from '../../assets/athens.png'
import proj07 from '../../assets/sam.png'
import proj08 from '../../assets/glor.png'
import proj09 from '../../assets/japanese.png'

export function ProjectsDetailed() {
  const cards = [
    {
      id: 1,
      type: "WEB/Mobile",
      title: "Athens Central Hotel",
      description:
        "Athens Central Hotel is a hotel located in the center of Athens, Greece. It offers a variety of rooms and services.",
      imgUrl: proj06,
      link: "https://www.athenscentralhotel.com",
    },
    {
      id: 2,
      type: "WEB/Mobile",
      title: "Sam Standard Furniture",
      description:
        "Sam Standard Furniture is a furniture company located in the United States. It offers a variety of furniture and services.",
      imgUrl: proj07,
      link: "https://sam-standard.vercel.app/",
    },
    {
      id: 3,
      type: 'UI/UX Design',
      title: 'Hydrate, a water delivery platform',
      description:
        'Hydrate is a platform that offers water delivery at a quality and competitive price',
      imgUrl: proj01,
      link: 'https://www.behance.net/gallery/173041745/Water-Delivery-Website-Landing-Page',
    },
    {
      id: 4,
      type: "WEB",
      title: "GloRhe Health",
      description:
      'The GloRhea website was made to encourage pregnant, confident women to make informed decisions. '
      ,imgUrl: proj08,
      // https://glorhea-womenhelp.netlify.app/
      link: "https://glorhea-womenhelp.netlify.app/",
      
    }, {
      id: 5,
      type: "WEB",
      title: "TKO Personal Trainer",
      description:
    'TKO personal trainer is a Gym website that offers a variety of services and training programs. '
    ,imgUrl: proj09,
    link: "https://japanese-web.vercel.app/",

    },
    {
      id: 6,
      type: 'UI/UX Design',
      title: 'ADOC, Your Online Medical Appoinments',
      description:
        'ADOC Is an online Medical appoinment that allow user to take an appoinment with a doctor, it also work as a medical files holder',
      imgUrl: proj05
    },

    
    {
      id: 7,
      type: 'Web / app Development',
      title: 'Cooke Me, Fresh food At your Home',
      description:
        'Cooke me is a platform that offers fresh meals at a cheap price and allows individual to sell their meals',
      imgUrl: proj02
    },
   
    {
      id: 8,
      type: 'UI/UX Design',
      title: 'Homely, Nice and good furniture for your Home',
      description:
        'Homely is an platform that offer couchs, futons, desks and most variable furniture for your home',
      imgUrl: proj04,
      link: 'https://www.figma.com/file/9F1A4Qut5bjIZnieQCsoKZ/Interior-Design-Website?type=design&node-id=1%3A458&mode=design&t=J0lYhpJa6LOXKjUB-1'
    },
  ]
  return (
    <section className='w-full mt-32 px-4'>
      <div className='flex flex-col items-center gap-20'>
        {cards.map(props => (
          <ProjectCardDetailed key={props.id} {...props} />
        ))}
      </div>
    </section>
  )
}
