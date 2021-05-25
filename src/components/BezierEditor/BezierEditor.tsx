import {TransitionValue} from '../../types'
import {useCallback, useEffect, useState} from 'react'
import './bezier-editor.scss'

const defaultValues = {x1: '0', y1: '0', x2: '1', y2: '1'}

const InputBlock = ({
  name,
  value,
  setValue
}: {
  name: string
  value: string
  setValue: (name: string, value: string) => void
}) => (
  <div className="input-block">
    <label htmlFor={name}>{name}</label>
    <input
      type="number"
      id={name}
      value={value}
      step={0.1}
      min={-2}
      max={5}
      onInput={e => setValue(e.currentTarget.id, e.currentTarget.value)}
    />
  </div>
)

type BezierEditorProps = {
  selectedValue: string
  setSelectedTimingFunction: (timingFunction: TransitionValue) => void
}

const BezierEditor = ({
  selectedValue,
  setSelectedTimingFunction
}: BezierEditorProps): JSX.Element => {
  const [values, setValues] = useState(defaultValues)

  const {x1, y1, x2, y2} = values

  const extractValues = useCallback(() => {
    const values = selectedValue
      .split('cubic-bezier(')[1]
      .split(',')
      .map(value => value.replace(')', '').trim())
    setValues({x1: values[0], y1: values[1], x2: values[2], y2: values[3]})
  }, [selectedValue])

  useEffect(() => {
    extractValues()
  }, [extractValues, selectedValue])

  const onValueChanged = useCallback(
    (name, value) => {
      const newValues = {x1, y1, x2, y2, ...{[name]: value}}
      setSelectedTimingFunction({
        name: 'custom',
        value: `cubic-bezier(${newValues.x1}, ${newValues.y1}, ${newValues.x2}, ${newValues.y2})`
      })
    },
    [setSelectedTimingFunction, x1, x2, y1, y2]
  )

  return (
    <div className="bezier-editor">
      <div className="inputs">
        <InputBlock name="x1" value={x1} setValue={onValueChanged} />
        <InputBlock name="y1" value={y1} setValue={onValueChanged} />
        <InputBlock name="x2" value={x2} setValue={onValueChanged} />
        <InputBlock name="y2" value={y2} setValue={onValueChanged} />
      </div>

      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function"
        target="_blank"
        rel="noreferrer"
      >
        Help
      </a>
    </div>
  )
}

export default BezierEditor
