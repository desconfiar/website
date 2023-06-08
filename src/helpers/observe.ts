import { useEffect, RefObject } from 'react'

import { AnimationControls } from 'framer-motion'

const observe = (controls: AnimationControls, ref: RefObject<Element>) => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible')
                } else {
                    controls.start('hidden')
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: isMobile ? [0.25, 0.5, 0.75] : [0.5]
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [controls])
}

export default observe
