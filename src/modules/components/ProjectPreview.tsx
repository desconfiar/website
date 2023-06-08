'use client'

import { FC, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/modules/ProjectPreview.module.css'

import { ProjectPreviewInterface } from '@/interfaces/ProjectPreviewInterface'

const ProjectPreview: FC<ProjectPreviewInterface> = ({ href, title, src }) => {
    return (
        <Link className={styles.link} href={href}>
            <Image className={styles.image} src={src} alt={title} />
            <h3 className={styles.title}>{title}</h3>
        </Link>
    )
}

export default ProjectPreview
