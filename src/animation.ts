export const contentVariants = {
  hidden: {opacity: 1, scale: 0},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

export const contentItem = {
  hidden: {x: -50, opacity: 0},
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
    backgroundColor: 'var(--color-nitor-blue)',
    color: 'var(--color-white)'
  }
}

export const fadeInOut = {
  hidden: {opacity: 0, scale: 0.5},
  visible: {opacity: 1, scale: 1},
  exit: {opacity: 0, scale: 0}
}

export const toggleDropdown = {
  hidden: {height: 0, opacity: 0},
  visible: {height: 'auto', opacity: 1},
  exit: {height: 0, opacity: 0}
}

export const buttonHover = {
  backgroundColor: 'var(--color-nitor-blue)',
  color: 'var(--color-white)'
}

export const transitionListHover = {
  hover: {x: '-3rem'},
  hidden: {opacity: 0, x: '5rem'},
  visible: {opacity: 1, x: '5rem'},
  exit: {opacity: 0}
}

export const transitionItemsHover = {
  hidden: {opacity: 0.2},
  hover: {opacity: 1}
}

export const addNewTransitionText = {
  hover: {color: 'var(--color-nitor-blue)'},
  tap: {color: 'var(--color-nitor-blue)'}
}

export const addNewTransitionIcon = {
  hover: {color: 'var(--color-nitor-blue)'},
  tap: {color: 'var(--color-pink)'}
}
