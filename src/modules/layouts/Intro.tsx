import { FC } from 'react'

import styles from '@/styles/modules/Intro.module.css'

import { LayoutInterface } from '@/interfaces/LayoutInterface'

import Section from '@/modules/layouts/Section'
import Container from '@/modules/layouts/Container'

import Header from '@/modules/components/Header'

const Intro: FC<LayoutInterface> = ({ children }) => {
    return (
        <section className={styles.intro}>
            <Container>{children}</Container>
        </section>
    )
}

export default Intro
