import { FC } from 'react'

import styles from '@/styles/modules/Wrapper.module.css'

import { LayoutInterface } from '@/interfaces/LayoutInterface'

import Header from '@/modules/components/Header'
import Footer from '@/modules/components/Footer'

const Wrapper: FC<LayoutInterface> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Wrapper
