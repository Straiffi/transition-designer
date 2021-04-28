import {useCallback, useRef, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import './transition-preview.scss'
import {contentItem} from '../../animation'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopy} from '@fortawesome/free-solid-svg-icons'
import FadeInOut from '../Animation/FadeInOut'

type TransitionPreviewProps = {
  transitionProperty: string
  transitionDuration: string
  transitionTimingFunction?: string
  transitionDelay?: string
}

const TransitionPreview = ({
  transitionProperty,
  transitionDuration,
  transitionTimingFunction = 'linear',
  transitionDelay = '0ms'
}: TransitionPreviewProps): JSX.Element => {
  const codePreviewRef = useRef<HTMLInputElement>(null)
  const [copyNoticeVisible, setCopyNoticeVisible] = useState(false)

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

  const transitionDelayLabel =
    transitionDelay !== '0ms' ? ` ${transitionDelay}` : ''

  const transitionStyle = `${transitionProperty} ${transitionDuration} ${transitionTimingFunction}${transitionDelayLabel}`

  return (
    <div className="transition-preview-container">
      <motion.div
        style={{
          transition: transitionStyle
        }}
        className={`transition-preview ${transitionProperty}`}
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

        <button
          className="button"
          onClick={copyToClipboard}
          title="copy to clipboard"
        >
          <FontAwesomeIcon icon={faCopy} size="lg" />
        </button>
      </motion.div>

      <FadeInOut visible={copyNoticeVisible} key="copy-notice">
        <span>code copied to clipboard</span>
      </FadeInOut>
    </div>
  )
}

export default TransitionPreview
