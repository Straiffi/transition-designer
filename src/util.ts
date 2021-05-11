import round from 'lodash/round'

export const formatMilliseconds = (ms: number): string => {
  if (ms < 1000) {
    return `${ms}ms`
  }

  return `${round(ms * 0.001, 1)}s`
}

export const createTransitionStyleString = ({
  transitionProperty,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay
}: {
  transitionProperty: string
  transitionDuration: string
  transitionTimingFunction: string
  transitionDelay?: string
}): string => {
  const transitionDelayLabel =
    transitionDelay !== '0ms' ? ` ${transitionDelay}` : ''

  return `${transitionProperty} ${transitionDuration} ${transitionTimingFunction}${transitionDelayLabel}`
}

export const getPropertiesFromStyleString = (transitionStyles: string[]) =>
  transitionStyles.map(style => style.split(' ')[0])
