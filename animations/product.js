export const imgVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transiton: {
      type: "spring",
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.1,
    transiton: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
}
export const selectorVariants = {
  active: {
    background: "none",
    border: "#000 1px solid",
    color: "#000",
    transiton: {
      type: "spring",
    },
  },
  not: {
    background: "#000",
    border: "none",
    color: "#f5f5f5",
    transiton: {
      type: "spring",
    },
  },
}

export const headerVariants = {
  active: {
    borderBottom: "#000 1px solid",
    transiton: {
      delay: 0.2,
      ease: "easeIn",
    },
  },
  not: {
    border: "none",
    transiton: {
      ease: "easeOut",
      duration: 0.2,
    },
  },
}
