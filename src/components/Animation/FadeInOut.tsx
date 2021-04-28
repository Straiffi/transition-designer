import {AnimatePresence, motion} from 'framer-motion'
import {fadeInOut} from '../../animation'

type FadeInOutProps = {
  className?: string
  key: string
  visible: boolean
  children: JSX.Element
}

const FadeInOut = ({
  key,
  visible,
  children,
  className
}: FadeInOutProps): JSX.Element => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={fadeInOut}
          key={key}
          className={className}
          initial="hidden"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FadeInOut
