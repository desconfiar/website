import { FC } from 'react'

import styles from '@/styles/modules/Column.module.css'

import { ColumnInterface } from '@/interfaces/ColumnInterface'

const Column: FC<ColumnInterface> = ({ heading, list }) => {
    return (
        <div className={styles.column}>
            <h3 className={styles.heading}>{heading}</h3>
            <ul className={styles.list}>
                {list.map((item, index) => (
                    <li key={index} className={styles.item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Column
