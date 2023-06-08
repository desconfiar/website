import { FC, useState, useEffect } from 'react'

import styles from '@/styles/modules/Technologies.module.css'

import { TechnologiesInterface } from '@/interfaces/TechnologiesInterface'

import Technology from '@/modules/components/Technology'

import Container from '@/modules/layouts/Container'

import Heading from '@/modules/ui/Heading'

const Technologies: FC<TechnologiesInterface> = ({ categories }) => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const initial = Array(categories.length).fill(isMobile ? true : false)

    const [isHidden, setIsHidden] = useState<Array<boolean>>([...initial])

    const handleClick = (index: number) => {
        const array = [...initial]

        array[index] = !array[index]

        setIsHidden(array)
    }

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const titles = document.querySelectorAll(`.${styles.title}`)

            let isOutside = true

            titles.forEach((title) => {
                if (title.contains(event.target as Node)) {
                    isOutside = false
                }
            })

            if (isOutside) {
                setIsHidden([...initial])
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div id='technologies'>
            <Container>
                <div className={styles.container}>
                    <Heading level={2}>Technologies</Heading>
                    <div className={styles.categories}>
                        {categories.map((category, index) => {
                            return (
                                <div className={styles.category}>
                                    <h3
                                        className={styles.title}
                                        onClick={() =>
                                            isMobile && handleClick(index)
                                        }
                                    >
                                        {category.title}
                                    </h3>
                                    <div
                                        className={`${styles.items} ${
                                            isHidden[index] && styles.hidden
                                        }`}
                                    >
                                        {category.items.map((item) => {
                                            return (
                                                <Technology
                                                    key={item.id}
                                                    id={item.id}
                                                    title={item.title}
                                                    level={item.level}
                                                    src={item.src}
                                                />
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Technologies

/* {technologies.map((technology) => {
                            return (
                                <Technology
                                    key={technology.id}
                                    id={technology.id}
                                    title={technology.title}
                                    level={technology.level}
                                    src={technology.src}
                                />
                            )
                        })} */
