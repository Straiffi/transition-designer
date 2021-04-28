import {AnimatePresence, motion} from 'framer-motion'
import {useCallback, useRef, useState} from 'react'
import './property-selector.scss'
import {contentItem, selectorVariants} from '../../animation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {useClickOutside} from '../../hooks'

type PropertySelectorProps = {
  properties: string[]
  text: string
  setSelectedProperty: (property: string) => void
}

const PropertySelector = ({
  properties,
  text,
  setSelectedProperty
}: PropertySelectorProps): JSX.Element => {
  const selectorRef = useRef<HTMLDivElement>(null)
  const [listVisible, setListVisible] = useState(false)

  useClickOutside({ref: selectorRef, callback: () => setListVisible(false)})

  const selectProperty = useCallback(
    (property: string) => {
      setSelectedProperty(property)
      setListVisible(false)
    },
    [setSelectedProperty]
  )

  const propertyList = listVisible && (
    <motion.ul
      initial={{height: 0, opacity: 0}}
      animate={{height: 'auto', opacity: 1}}
      exit={{height: 0, opacity: 0}}
      key="property-list"
      className="property-list"
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
      <motion.button
        className="button"
        onClick={() => setListVisible(!listVisible)}
        initial={listVisible ? 'open' : 'closed'}
        animate={listVisible ? 'open' : 'closed'}
        variants={selectorVariants}
      >
        <span>{text}</span>
        <FontAwesomeIcon icon={faCaretDown} size="sm" />
      </motion.button>

      <AnimatePresence>{propertyList}</AnimatePresence>
    </motion.div>
  )
}

export default PropertySelector
