import {useCallback, useRef, useState} from 'react'
import {motion} from 'framer-motion'
import './transition-preview.scss'
import {buttonHover, contentItem} from '../../animation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'
import FadeInOut from '../Animation/FadeInOut'

type TransitionPreviewProps = {
  transitionProperties: string[]
  transitions: string[]
}

const TransitionPreview = ({
  transitionProperties,
  transitions
}: TransitionPreviewProps): JSX.Element => {
  const codePreviewRef = useRef<HTMLInputElement>(null)
  const [copyNoticeVisible, setCopyNoticeVisible] = useState(false)

  const transitionStyle = transitions.join(', ')

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
      </motion.div>

      <FadeInOut visible={copyNoticeVisible} animationKey="copy-notice">
        <span>code copied to clipboard</span>
      </FadeInOut>
    </div>
  )
}

export default TransitionPreview
