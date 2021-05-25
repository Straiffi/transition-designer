import React, {useCallback, useEffect, useRef, useState} from 'react'
import {TransitionValue, Transition} from './types'

export const useClickOutside = ({
  ref,
  callback
}: {
  ref: React.RefObject<HTMLElement>
  callback: () => void
}) => {
  const handleClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    },
    [callback, ref]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])
}

export const useTransitionsList = (defaultTransition: Transition) => {
  const [selectedTransition, setSelectedTransition] = useState<Transition>(
    defaultTransition
  )
  const [transitions, setTransitions] = useState<Transition[]>([
    selectedTransition
  ])

  const setSelectedProperty = useCallback(
    (property: TransitionValue) =>
      setSelectedTransition(currentState => ({...currentState, property})),
    []
  )

  const setSelectedTimingFunction = useCallback(
    (timingFunction: TransitionValue) =>
      setSelectedTransition(currentState => ({
        ...currentState,
        timingFunction
      })),
    []
  )

  const setSelectedDuration = useCallback(
    (duration: number) =>
      setSelectedTransition(currentState => ({...currentState, duration})),
    []
  )

  const setSelectedDelay = useCallback(
    (delay: number) =>
      setSelectedTransition(currentState => ({...currentState, delay})),
    []
  )

  useEffect(() => {
    setTransitions(currentState => {
      const newArray = [...currentState]
      const selectedIndex = newArray.findIndex(
        transition => transition.id === selectedTransition.id
      )
      newArray[selectedIndex] = selectedTransition
      return newArray
    })
  }, [selectedTransition])

  return {
    transitions,
    setTransitions,
    setSelectedTransition,
    selectedTransition,
    setSelectedProperty,
    setSelectedTimingFunction,
    setSelectedDuration,
    setSelectedDelay
  }
}

export const useUnload = (handler: (event: BeforeUnloadEvent) => void) => {
  const callback = useRef((event: BeforeUnloadEvent) => {
    handler(event)
    if (event.defaultPrevented) {
      event.returnValue = ''
    }
  })

  useEffect(() => {
    const eventListener = callback.current
    window.addEventListener('beforeunload', eventListener)
    return () => {
      window.removeEventListener('beforeunload', eventListener)
    }
  }, [])
}
