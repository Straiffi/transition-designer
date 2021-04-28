export const contentVariants = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2
    }
  }
}

export const contentItem = {
  hidden: {x: -70, opacity: 0},
  visible: {
    x: 0,
    opacity: 1
  }
}

export const selectorVariants = {
  closed: {
    borderRadius: '20px',
    transition: {
      delay: 0.2
    }
  },
  open: {
    borderRadius: 0,
    borderBottom: 'none'
  }
}

export const fadeInOut = {
  hidden: {opacity: 0, scale: 0.5},
  visible: {opacity: 1, scale: 1},
  exit: {opacity: 0, scale: 0}
}
