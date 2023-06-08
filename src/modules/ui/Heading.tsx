import { FC } from 'react'

import styles from '@/styles/modules/Heading.module.css'

import { HeadingInterface } from '@/interfaces/HeadingInterface'

const Heading: FC<HeadingInterface> = ({ children, ...props }) => {
    const Tag = `h${props.level || 1}` as keyof JSX.IntrinsicElements

    console.log(Tag)

    return (
        <Tag className={`${styles.heading} ${styles[Tag]}`} {...props}>
            {children}
        </Tag>
    )
}

export default Heading
