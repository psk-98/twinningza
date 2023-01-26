export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.1,
      duration: 0.3,
    },
  },
  exit: {
    x: -300,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
}
export const containerVariantss = {
  hidden: {
    opacity: 0,
    //x: "100vw",
    //scale: 2,
  },
  visible: {
    opacity: 1,
    //scale: 1,
    //x: "0vw",
    transition: {
      type: "spring",
      staggerChildren: 0.3,
      duration: 0.8,
      delay: 0.5,
    },
  },
  exit: {
    //opacity: 0,
    //scale: 0.1,
    x: "-100vw",
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1,
    },
  },
}
