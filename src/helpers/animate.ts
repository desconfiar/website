import { AnimationControls } from 'framer-motion'

const animate = (controls: AnimationControls) => {
    return {
        animate: controls,
        initial: 'hidden',
        transition: {
            duration: 1
        },
        variants: {
            visible: {
                opacity: 1
            },
            hidden: {
                opacity: 0
            }
        }
    }
}

export default animate
