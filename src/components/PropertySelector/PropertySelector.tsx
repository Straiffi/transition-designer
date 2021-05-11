import {AnimatePresence, motion} from 'framer-motion'
import {useCallback, useRef, useState} from 'react'
import './property-selector.scss'
import {
  buttonHover,
  contentItem,
  selectorVariants,
  toggleDropdown
} from '../../animation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {useClickOutside} from '../../hooks'

type PropertySelectorProps = {
  properties: string[]
  text: string
  selectedProperty: string
  setSelectedProperty: (property: string) => void
}

const PropertySelector = ({
  properties,
  text,
  selectedProperty,
  setSelectedProperty
}: PropertySelectorProps): JSX.Element => {
  const selectorRef = useRef<HTMLDivElement>(null)
  const [listVisible, setListVisible] = useState(false)
  const [toggleable, setToggleable] = useState(true)

  useClickOutside({ref: selectorRef, callback: () => setListVisible(false)})

  const selectProperty = useCallback(
    (property: string) => {
      setSelectedProperty(property)
      setListVisible(false)
    },
    [setSelectedProperty]
  )

  const toggleList = useCallback(() => {
    if (!toggleable) {
      return
    }

    setListVisible(!listVisible)
    setToggleable(false)
  }, [listVisible, toggleable])

  const onAnimationComplete = useCallback(() => setToggleable(true), [])

  const propertyList = listVisible && (
    <motion.ul
      variants={toggleDropdown}
      initial="hidden"
      exit="exit"
      key="property-list"
      className="property-list"
      onAnimationComplete={onAnimationComplete}
    >
      {properties.map(property => (
        <li onClick={() => selectProperty(property)} key={property}>
          {property}
        </li>
      ))}
    </motion.ul>
  )

  return (
    <motion.div
      className="property-selector"
      variants={contentItem}
      ref={selectorRef}
    >
      <span className="property-selector-name">{text}</span>
      <motion.button
        className="button"
        onClick={toggleList}
        initial={listVisible ? 'open' : 'closed'}
        animate={listVisible ? 'open' : 'closed'}
        whileHover={buttonHover}
        variants={selectorVariants}
      >
        <span>{selectedProperty}</span>
        <FontAwesomeIcon icon={faCaretDown} size="sm" />
      </motion.button>

      <AnimatePresence>{propertyList}</AnimatePresence>
    </motion.div>
  )
}

export default PropertySelector
