import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GA4React from 'ga-4-react'

const ga4react = new GA4React('G-8PVC2ZG2Z7')

const GAWrapper = ({gaError}: {gaError: boolean}) => {
  return <App ga={!gaError ? ga4react : undefined} />
}

;(async () => {
  let gaError = false
  try {
    await ga4react.initialize()
  } catch (e) {
    gaError = true
  }

  ReactDOM.render(
    <React.StrictMode>
      <GAWrapper gaError={gaError} />
    </React.StrictMode>,
    document.getElementById('root')
  )
})()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
