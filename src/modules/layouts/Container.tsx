import { FC } from 'react'

import styles from '@/styles/modules/Container.module.css'

import { LayoutInterface } from '@/interfaces/LayoutInterface'

const Container: FC<LayoutInterface> = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default Container
