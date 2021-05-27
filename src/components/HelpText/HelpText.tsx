import './help-text.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'

const HelpText = (): JSX.Element => {
  return (
    <div className="help-text">
      <div className="hover-block">
        <span>How does this work?</span>
        <FontAwesomeIcon icon={faInfoCircle} />
      </div>

      <div className="info-block">
        <p>
          Choose a property and settings, then preview the transition by moving
          your cursor over the Hover me -box.
        </p>
        <p>
          You can add multiple properties to the same transition by clicking the
          Add new property -button.
        </p>
        <p>
          When you are done, copy the transition's code by clicking the copy
          -button.
        </p>
      </div>
    </div>
  )
}

export default HelpText
