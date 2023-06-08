import { FC } from 'react'

import styles from '@/styles/modules/Projects.module.css'

import { ProjectsInterface } from '@/interfaces/ProjectsInterface'

import Container from '@/modules/layouts/Container'

import ProjectPreview from '@/modules/components/ProjectPreview'

import Heading from '@/modules/ui/Heading'

const Projects: FC<ProjectsInterface> = ({ projects }) => {
    return (
        <div id='projects'>
            <Container>
                <div className={styles.content}>
                    <Heading level={2}>Projects</Heading>
                    <div className={styles.container}>
                        {projects.map((project, index) => {
                            return (
                                <ProjectPreview
                                    key={index}
                                    href={project.href}
                                    src={project.src}
                                    title={project.title}
                                />
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Projects
