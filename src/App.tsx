import {motion} from 'framer-motion'
import './App.scss'
import TransitionPreview from './components/TransitionPreview/TransitionPreview'
import PropertySelector from './components/PropertySelector/PropertySelector'
import {contentVariants} from './animation'
import {useState} from 'react'

const transitionProperties = [
  'background-color',
  'color',
  'border',
  'border-radius',
  'width',
  'height',
  'opacity',
  'font-size',
  'margin',
  'padding',
  'transform',
  'top',
  'bottom',
  'left',
  'right',
  'box-shadow',
  'text-shadow'
]

const timingFunctions = ['linear', 'ease-in', 'ease-out', 'ease-in-out']

const App = () => {
  const [selectedProperty, setSelectedProperty] = useState('background-color')
  const [selectedDuration, setSelectedDuration] = useState('300ms')
  const [selectedTimingFunction, setSelectedTimingFunction] = useState('linear')
  const [selectedDelay, setSelectedDelay] = useState('0ms')

  return (
    <div className="app">
      <motion.h1
        animate={{opacity: 1, scale: 1}}
        initial={{opacity: 0, scale: 0.5}}
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
          >
            <PropertySelector
              properties={transitionProperties}
              setSelectedProperty={setSelectedProperty}
              text="Select property"
            />
            <PropertySelector
              properties={timingFunctions}
              setSelectedProperty={setSelectedTimingFunction}
              text="Select timing function"
            />
          </motion.div>
          <TransitionPreview
            transitionProperty={selectedProperty}
            transitionTimingFunction={selectedTimingFunction}
            transitionDuration="300ms"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default App
