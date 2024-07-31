import { useRef } from 'react';

/**
 * @since 1.0.0
 */
export default function usePrevious(value: any) {
  const currentRef = useRef(value);
  const previousRef = useRef();

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }
  return previousRef.current;
}
