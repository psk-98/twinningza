export const sliderCardVariants = {
  hover: {
    opacity: 0.85,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  initial: {
    opacity: 0,
    y: 50,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
}

export const inViewVariants = {
  initial: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
}

export const svgVariants = {
  hidden: { rotate: -45 },
  visible: {
    rotate: 0,
    transition: { duration: 1, staggerChildren: 0.4 },
  },
  exit: {
    opacity: 0,
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 1,
    },
  },
  tap: {
    scale: 0.95,
  },
}

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  hover: {
    opacity: [1, 0, 1],
    pathLength: [1, 0, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      staggerChildren: 0.4,
    },
  },
}
