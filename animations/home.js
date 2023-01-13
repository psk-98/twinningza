export const btnVariants = {
  hover: {
    background: ['#000', 'None'],
    borderBottom: '1px solid #000',
    borderTop: '1px solid #000',
    color: '#000',
    transition: {
      type: 'spring',
      ease: 'easeIn',
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      type: 'spring',
      duration: 1,
      ease: 'easeOut',
    },
  },
  initial: {
    background: '#000',
    transition: {
      type: 'spring',
      ease: 'easeIn',
      duration: 0.3,
    },
  },
}
