import { useRef, useEffect } from 'react'

export default function useUpdateEffect(callback, dependencies) {
  const firstRendererRef = useRef(true)

  useEffect(() => {
    if (firstRendererRef.current) {
      firstRendererRef.current = false
      return
    }
    return callback()
  }, [dependencies])
}
