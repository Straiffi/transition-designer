import './transitions-list.scss'
import {Transition} from '../../types'
import {AnimatePresence, motion} from 'framer-motion'
import {transitionItemsHover, transitionListHover} from '../../animation'
import {faTrash, faBan} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useCallback} from 'react'

type TransitionsListProps = {
  transitions: Transition[]
  selectedTransition: Transition
  setSelectedTransition: (transition: Transition) => void
  deleteTransition: (transition: Transition) => void
  resetTransition: () => void
}

const TransitionsList = ({
  transitions,
  selectedTransition,
  setSelectedTransition,
  deleteTransition,
  resetTransition
}: TransitionsListProps): JSX.Element => {
  const onDeleteClick = useCallback(
    (event, transition) => {
      event.stopPropagation()
      deleteTransition(transition)
    },
    [deleteTransition]
  )

  const transitionItems = transitions.map(transition => {
    const selected = transition.id === selectedTransition.id
    return (
      <motion.div
        className={`transition-item ${selected ? 'selected' : ''}`}
        onClick={() => setSelectedTransition(transition)}
        key={transition.property.name}
        variants={transitionItemsHover}
        layout
      >
        <span>{transition.property.name}</span>

        {!selected && (
          <button
            className="delete-transition-button button"
            onClick={event => onDeleteClick(event, transition)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </motion.div>
    )
  })

  return (
    <AnimatePresence>
      {transitions.length >= 2 && (
        <motion.div
          className="transitions-list"
          whileHover="hover"
          animate="visible"
          initial="hidden"
          exit="exit"
          variants={transitionListHover}
          key="transitions-list"
        >
          <span className="transitions-list-header">edit/delete</span>
          <div className="transition-items">
            {transitionItems}
            <motion.button
              className="reset-transition-button button"
              variants={transitionItemsHover}
              onClick={resetTransition}
            >
              reset transition
              <FontAwesomeIcon icon={faBan} />
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TransitionsList
