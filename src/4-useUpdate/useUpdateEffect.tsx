import { useRef, useEffect } from 'react';

export default function useUpdateEffect(
  callback: Function,
  dependencies: any[]
) {
  const firstRendererRef = useRef(true);

  useEffect(() => {
    if (firstRendererRef.current) {
      firstRendererRef.current = false;
      return;
    }
    return callback();
  }, [dependencies]);
}
