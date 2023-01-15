export const containerVariants = {
  hidden: {
    //opacity: 0,
    x: "100vw",
    //scale: 2,
  },
  visible: {
    //opacity: 1,
    //scale: 1,
    x: "0vw",
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
