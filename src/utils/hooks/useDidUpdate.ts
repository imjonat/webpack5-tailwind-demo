import { useRef, useEffect, DependencyList } from 'react'

export function useDidUpdate(fn, deps: DependencyList) {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      fn()
    } else {
      didMountRef.current = true
    }
  }, deps)
}
