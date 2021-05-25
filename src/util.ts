import round from 'lodash/round'
import {Transition} from './types'

export const formatMilliseconds = (ms: number): string => {
  if (ms < 1000) {
    return `${ms}ms`
  }

  return `${round(ms * 0.001, 1)}s`
}

export const createTransitionStyleString = (transition: Transition): string => {
  const {property, timingFunction, duration, delay = 0} = transition

  const transitionDelayLabel =
    delay !== 0 ? ` ${formatMilliseconds(delay)}` : ''

  return `${property.value || property.name} ${formatMilliseconds(duration)} ${
    timingFunction.value || timingFunction.name
  }${transitionDelayLabel}`
}
