import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/modules/Footer.module.css'

import telegram from '@/assets/icons/telegram.svg'
import github from '@/assets/icons/github.svg'

import Container from '@/modules/layouts/Container'

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.top}>
                    <Link
                        className={styles.link}
                        href='https://t.me/desconfiar'
                    >
                        <Image
                            src={telegram}
                            alt='Telegram'
                            height='30'
                            width='30'
                        />
                    </Link>
                    <Link
                        className={styles.link}
                        href='https://github.com/desconfiar'
                    >
                        <Image
                            src={github}
                            alt='Github'
                            height='30'
                            width='30'
                        />
                    </Link>
                </div>
                <hr className={styles.line} />
                <div className={styles.bottom}>
                    <p className={styles.text}>© Desconfiar, 2022</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
