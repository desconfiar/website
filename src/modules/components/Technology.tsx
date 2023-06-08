import { FC } from 'react'

import Image from 'next/image'

import styles from '@/styles/modules/Technology.module.css'

import { TechnologyInterface } from '@/interfaces/TechnologyInterface'

const Technology: FC<TechnologyInterface> = ({ title, level, src }) => {
    return (
        <div className={styles.item}>
            <Image className={styles.icon} src={src} alt={'Some alt.'} />
            {/* <h3 className={styles.heading}>{title}</h3> */}
        </div>
    )
}

export default Technology
