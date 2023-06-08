import { FC } from 'react'

import styles from '@/styles/modules/Button.module.css'

import { ButtonInterface } from '@/interfaces/ButtonInterface'

const Button: FC<ButtonInterface> = ({
    children,
    className,
    disabled,
    onClick
}) => {
    return (
        <button
            className={`${styles.button} ${className}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
