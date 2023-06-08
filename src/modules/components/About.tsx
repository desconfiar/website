import { FC } from 'react'

import styles from '@/styles/modules/About.module.css'

import Container from '@/modules/layouts/Container'

import Heading from '@/modules/ui/Heading'

const About: FC = () => {
    const data = [
        {
            heading: 'Heading 1',
            list: ['List item 1', 'List item 2', 'List item 3']
        },
        {
            heading: 'Heading 1',
            list: ['List item 1', 'List item 2', 'List item 3']
        },
        {
            heading: 'Heading 1',
            list: ['List item 1', 'List item 2', 'List item 3']
        }
    ]

    return (
        <div className={styles.about} id='about'>
            <Container>
                <div className={styles.container}>
                    <Heading level={2}>About me</Heading>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit provident, enim laudantium eos atque esse
                        placeat dolor, ad autem cupiditate ea. Quae qui
                        perspiciatis quaerat ipsam saepe accusamus laborum
                        libero magnam dolor, dolore eos doloribus possimus
                        facere! Assumenda earum numquam neque voluptas eum
                        facere facilis nulla labore sunt, eius cupiditate
                        corrupti quibusdam magnam at repellat nisi.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default About
