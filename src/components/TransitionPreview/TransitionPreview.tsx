import {useCallback, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import './transition-preview.scss'
import {buttonHover, contentItem} from '../../animation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'
import FadeInOut from '../Animation/FadeInOut'
import {Transition} from '../../types'
import {createTransitionStyleString} from '../../util'

type TransitionPreviewProps = {
  transitionProperties: string[]
  transitions: Transition[]
}

const TransitionPreview = ({
  transitionProperties,
  transitions
}: TransitionPreviewProps): JSX.Element => {
  const codePreviewRef = useRef<HTMLInputElement>(null)
  const [copyNoticeVisible, setCopyNoticeVisible] = useState(false)

  const transitionStyle = transitions
    .map(transition => createTransitionStyleString(transition))
    .join(', ')

  const copyToClipboard = useCallback(() => {
    if (!codePreviewRef.current) {
      return
    }

    const element = codePreviewRef.current
    element.select()
    document.execCommand('copy')

    setCopyNoticeVisible(true)
    setTimeout(() => setCopyNoticeVisible(false), 3000)
  }, [])

  return (
    <div className="transition-preview-container">
      <motion.div
        style={{
          transition: transitionStyle
        }}
        className={`transition-preview ${transitionProperties.join(' ')}`}
        variants={contentItem}
      >
        Hover me
      </motion.div>

      <motion.div className="code-preview" variants={contentItem}>
        <div className="code-preview-code-block">
          <code>transition: {transitionStyle};</code>
          <input
            value={`transition: ${transitionStyle};`}
            ref={codePreviewRef}
            readOnly
          />

          <motion.button
            className="button"
            onClick={copyToClipboard}
            title="copy to clipboard"
            whileHover={buttonHover}
          >
            <FontAwesomeIcon icon={faCopy} size="lg" />
          </motion.button>
        </div>

        <FadeInOut
          visible={copyNoticeVisible}
          animationKey="copy-notice"
          className="copy-notice"
        >
          <span>code copied to clipboard</span>
        </FadeInOut>
      </motion.div>
    </div>
  )
}

export default TransitionPreview
