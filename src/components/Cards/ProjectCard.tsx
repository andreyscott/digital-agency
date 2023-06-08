import Image from 'next/image'

import styles from '../../styles/portfolio.module.css'
interface IImageProps {
  imgUrl: string
  spec: string
  project: string
}

export const ProjectCard = ({ imgUrl, spec, project }: IImageProps) => {
  return (
    <div className='w-[350px] last:row-start-1 last:row-span-2 last:col-start-3 xl:last-of-type:h-full xl:last-of-type:overflow-visible'>
      <div className={`${styles.ourportfolio} + 'h-[305px] xl:h-fit overflow-hidden`}>
        <div className={styles.item}>

      <div className={styles.thumb}>

        <Image
          src={`/${imgUrl}`}
          width={350}
          height={659}
          alt={''}
          className='w-full'
        />
        </div>
        </div>
      </div>
      <div className={styles.hovereffect}>

      <div className={`${styles.innerContent} + 'mt-2'`}>
        <h4>
          <strong>{spec}</strong>
        </h4>
        <span className='text-sm text-white/80'>{project}</span>
      </div>
      </div>
    </div>
  )
}
