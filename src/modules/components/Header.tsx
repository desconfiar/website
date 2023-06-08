'use client'

import { motion } from 'framer-motion'

import { FC, useState, useEffect } from 'react'

import styles from '@/styles/modules/Header.module.css'

import Container from '@/modules/layouts/Container'

import Nav from '@/modules/components/Nav'

const Header: FC = () => {
    const [isHidden, setIsHidden] = useState<boolean>(false)

    let position: number = 0

    // write a function that check if the user is scrolling up or down

    const onScroll = () => {
        setIsHidden(position < window.pageYOffset)

        position = window.pageYOffset
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        console.log(position, window.pageYOffset)
    }, [position])

    return (
        <motion.header
            className={`${styles.header} ${isHidden && styles.hidden}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container>
                <Nav />
            </Container>
        </motion.header>
    )
}

export default Header
