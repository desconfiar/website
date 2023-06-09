import { FC, useRef, useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'

import animate from '@/helpers/animate'

import styles from '@/styles/modules/Section.module.css'

import { LayoutInterface } from '@/interfaces/LayoutInterface'

const Section: FC<LayoutInterface> = ({ children }) => {
    const controls = useAnimation()

    const ref = useRef(null)

    useEffect(() => {
        const isMobile = window.matchMedia('(max-width: 768px)').matches

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible')
                } else {
                    controls.start('hidden')
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: isMobile ? [0.25, 0.5, 0.75] : [0.5]
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [controls])

    const props = animate(controls)

    return (
        <motion.section className={styles.section} ref={ref} {...props}>
            {children}
        </motion.section>
    )
}

export default Section
