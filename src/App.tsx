import {motion} from 'framer-motion'
import './App.scss'
import TransitionPreview from './components/TransitionPreview/TransitionPreview'
import PropertySelector from './components/PropertySelector/PropertySelector'
import {contentItem, contentVariants} from './animation'
import {useCallback, useEffect, useState} from 'react'
import ValueSlider from './components/ValueSlider/ValueSlider'
import {
  createTransitionStyleString,
  formatMilliseconds,
  getPropertiesFromStyleString
} from './util'
import Footer from './components/Footer/Footer'
import {timingFunctions, transitionProperties} from './data'

const defaultState = {
  property: 'background-color',
  timingFunction: 'linear',
  duration: 300,
  delay: 0
}

const App = () => {
  const [selectedProperty, setSelectedProperty] = useState(
    defaultState.property
  )
  const [selectedTimingFunction, setSelectedTimingFunction] = useState(
    defaultState.timingFunction
  )
  const [selectedDuration, setSelectedDuration] = useState(
    defaultState.duration
  )
  const [selectedDelay, setSelectedDelay] = useState(defaultState.delay)

  const [transitions, setTransitions] = useState<string[]>([])
  const [selectedTransitionIndex, setSelectedTransitionIndex] = useState(0)

  useEffect(() => {
    setTransitions(currentState => {
      const newArray = [...currentState]
      newArray[selectedTransitionIndex] = createTransitionStyleString({
        transitionProperty: selectedProperty,
        transitionDuration: formatMilliseconds(selectedDuration),
        transitionTimingFunction: selectedTimingFunction,
        transitionDelay: formatMilliseconds(selectedDelay)
      })
      return newArray
    })
  }, [
    selectedDelay,
    selectedDuration,
    selectedProperty,
    selectedTimingFunction,
    selectedTransitionIndex
  ])

  const selectedProperties = getPropertiesFromStyleString(transitions)
  const filteredProperties = transitionProperties.filter(
    property => !selectedProperties.includes(property)
  )

  const addNewTransition = useCallback(() => {
    setSelectedTransitionIndex(selectedTransitionIndex + 1)
    setSelectedProperty(filteredProperties[0])
  }, [filteredProperties, selectedTransitionIndex])

  return (
    <div className="app">
      <motion.h1
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 1}}
      >
        Transition Designer
      </motion.h1>

      <div className="content-container">
        <motion.div
          className="content"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="selectors"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.5}}
          >
            <motion.button
              variants={contentItem}
              onClick={addNewTransition}
              disabled={filteredProperties.length === 0}
            >
              add new transition
            </motion.button>

            <PropertySelector
              properties={filteredProperties}
              setSelectedProperty={setSelectedProperty}
              text="Select property"
              selectedProperty={selectedProperty}
            />
            <PropertySelector
              properties={timingFunctions}
              setSelectedProperty={setSelectedTimingFunction}
              text="Select timing function"
              selectedProperty={selectedTimingFunction}
            />

            <ValueSlider
              selectedValue={selectedDuration}
              minValue={100}
              setValue={setSelectedDuration}
              text="Select duration"
            />
            <ValueSlider
              selectedValue={selectedDelay}
              setValue={setSelectedDelay}
              text="Select delay"
            />
          </motion.div>

          <TransitionPreview
            transitionProperties={selectedProperties}
            transitions={transitions}
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default App
