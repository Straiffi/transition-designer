import React, {useCallback, useEffect} from 'react'

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
