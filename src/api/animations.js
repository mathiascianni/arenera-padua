export const fadeInContainer = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.4,
        },
    },
}

export const fadeInItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
        },
    },
}

export const slideInContainer = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.4,
            duration: 1,
        },
    },
}

export const slideInItem = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
}