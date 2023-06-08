import { FC, MouseEvent } from 'react'

import styles from '@/styles/modules/Nav.module.css'

import Link from 'next/link'

const Nav: FC = () => {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()

        const selector = event.currentTarget.getAttribute('href')

        if (selector) {
            const element = document.querySelector(selector)

            if (element) {
                window.scrollTo({
                    behavior: 'smooth',
                    top:
                        element.getBoundingClientRect().top +
                        window.pageYOffset -
                        100
                })
            }
        }
    }

    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#about'
                        onClick={handleClick}
                    >
                        About
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#technologies'
                        onClick={handleClick}
                    >
                        Technologies
                    </Link>
                </li>
                <li className={styles.item}>
                    <Link
                        className={styles.link}
                        href='#projects'
                        onClick={handleClick}
                    >
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
