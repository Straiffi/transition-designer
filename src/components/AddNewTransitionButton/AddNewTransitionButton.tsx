import './add-new-transition-button.scss'
import {addNewTransitionIcon, addNewTransitionText} from '../../animation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'

type AddNewTransitionButtonProps = {
  addNewTransition: () => void
  disabled: boolean
}

const AddNewTransitionButton = ({
  addNewTransition,
  disabled
}: AddNewTransitionButtonProps): JSX.Element => {
  return (
    <motion.button
      variants={addNewTransitionText}
      initial="visible"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      onClick={addNewTransition}
      disabled={disabled}
      className="add-new-transition button"
      key="add-new-transition"
    >
      <motion.div variants={addNewTransitionIcon}>
        <FontAwesomeIcon icon={faPlus} />
      </motion.div>
      add new transition
    </motion.button>
  )
}

export default AddNewTransitionButton
