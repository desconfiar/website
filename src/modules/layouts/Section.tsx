import { FC, useRef } from 'react'

import { motion, useAnimation } from 'framer-motion'

import observe from '@/helpers/observe'
import animate from '@/helpers/animate'

import styles from '@/styles/modules/Section.module.css'

import { LayoutInterface } from '@/interfaces/LayoutInterface'

const Section: FC<LayoutInterface> = ({ children }) => {
    const controls = useAnimation()
    const ref = useRef(null)

    observe(controls, ref)

    const props = animate(controls)

    return (
        <motion.section className={styles.section} ref={ref} {...props}>
            {children}
        </motion.section>
    )
}

export default Section
