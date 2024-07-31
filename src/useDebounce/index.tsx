import { useEffect } from 'react';
import useTimeout from '../useTimeout';

/**
 * @since 1.5.0
 */
export default function useDebounce(
  callback: Function,
  delay: number,
  dependencies: any[]
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}
