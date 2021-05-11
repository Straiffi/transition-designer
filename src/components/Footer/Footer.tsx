import {memo} from 'react'
import './footer.scss'
import sample from 'lodash/sample'
import {verbs} from '../../data'

const Footer = (): JSX.Element => {
  return (
    <span className="footer">
      {sample(verbs)} by Juuso at{' '}
      <a href="https://nitor.com/" target="_blank" rel="noreferrer">
        Nitor
      </a>
    </span>
  )
}

export default memo(Footer)
