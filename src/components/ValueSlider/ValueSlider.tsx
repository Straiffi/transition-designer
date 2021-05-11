import {useCallback} from 'react'
import {motion} from 'framer-motion'
import {contentItem} from '../../animation'
import './value-slider.scss'
import {formatMilliseconds} from '../../util'

const MAX_VALUE = 10000
const MS_STEP = 50
const S_STEP = 100

type ValueSliderProps = {
  selectedValue: number
  text: string
  minValue?: number
  setValue: (value: number) => void
}

const ValueSlider = ({
  selectedValue,
  text,
  minValue = 0,
  setValue
}: ValueSliderProps): JSX.Element => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onValueChange = useCallback(
    event => {
      let value = parseInt(event.target.value, 10)

      // min / max doesn't seem to work on the input field for some reason
      if (!value || value < minValue) {
        value = minValue
      } else if (value > MAX_VALUE) {
        value = MAX_VALUE
      }

      setValue(value)
    },
    [minValue, setValue]
  )

  const isMs = selectedValue < 1000

  return (
    <motion.div className="value-slider" variants={contentItem}>
      <span className="value-slider-name">{text}</span>
      <input
        type="range"
        min={minValue}
        max={MAX_VALUE}
        step={isMs ? MS_STEP : S_STEP}
        value={selectedValue}
        onChange={onValueChange}
        className="value-slider-range"
      />

      <div className="value-slider-input-field-container">
        <input
          type="number"
          value={selectedValue}
          min={minValue}
          max={MAX_VALUE}
          step={isMs ? MS_STEP : S_STEP}
          onChange={onValueChange}
          className="value-slider-input-field"
        />
        <span>ms {!isMs && `= ${formatMilliseconds(selectedValue)}`}</span>
      </div>
    </motion.div>
  )
}

export default ValueSlider
