'use client'

import { NextPage } from 'next'

import { motion } from 'framer-motion'

import styles from '@/styles/modules/Home.module.css'

import src from '@/assets/images/project.jpg'

import html from '@/assets/icons/html.svg'
import css from '@/assets/icons/css.svg'
import javascript from '@/assets/icons/javascript.svg'
import typescript from '@/assets/icons/typescript.svg'
import react from '@/assets/icons/react.svg'
import next from '@/assets/icons/next.svg'
import node from '@/assets/icons/node.svg'
import redux from '@/assets/icons/redux.svg'

import Wrapper from '@/modules/layouts/Wrapper'
import Intro from '@/modules/layouts/Intro'
import Section from '@/modules/layouts/Section'

import About from '@/modules/components/About'
import Projects from '@/modules/components/Projects'
import Technologies from '@/modules/components/Technologies'

const Home: NextPage = () => {
    const projects = [
        {
            title: 'Desconfiar',
            href: 'https://github.com',
            src
        },
        {
            title: 'Desconfiar',
            href: 'https://github.com',
            src
        },
        {
            title: 'Desconfiar',
            href: 'https://github.com',
            src
        },
        {
            title: 'Desconfiar',
            href: 'https://github.com',
            src
        }
    ]

    const categories = [
        {
            title: 'Languages',
            items: [
                {
                    id: 0,
                    title: 'HTML',
                    level: '90%',
                    src: html
                },
                {
                    id: 1,
                    title: 'CSS',
                    level: '90%',
                    src: css
                },
                {
                    id: 2,
                    title: 'JavaScript',
                    level: '80%',
                    src: javascript
                },
                {
                    id: 3,
                    title: 'TypeScript',
                    level: '70%',
                    src: typescript
                }
            ]
        },
        {
            title: 'Frameworks',
            items: [
                {
                    id: 0,
                    title: 'React',
                    level: '70%',
                    src: react
                },
                {
                    id: 1,
                    title: 'Next',
                    level: '70%',
                    src: next
                }
            ]
        },
        {
            title: 'Libraries',
            items: [
                {
                    id: 0,
                    title: 'Redux',
                    level: '60%',
                    src: redux
                }
            ]
        },
        {
            title: 'Others',
            items: [
                {
                    id: 0,
                    title: 'Node.js',
                    level: '60%',
                    src: node
                }
            ]
        }
    ]

    return (
        <>
            <Wrapper>
                <Intro>
                    <motion.div
                        className={styles.content}
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className={`${styles.heading} accent`}>
                            Desconfiar
                        </h1>
                        <p className={styles.description}>
                            Hi, I am a front-end developer!
                        </p>
                    </motion.div>
                </Intro>
                <Section>
                    <About />
                </Section>
                <Section>
                    <Technologies categories={categories} />
                </Section>
                <Section>
                    <Projects projects={projects} />
                </Section>
            </Wrapper>
        </>
    )
}

export default Home
