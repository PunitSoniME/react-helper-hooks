import { useEffect, useRef } from 'react';

const DEFAULT_EVENTS = ['mouseup', 'touchend'];

/**
 * @since 1.12.0
 */
export default function useClickOutside(
  callback: Function,
  events?: string[] | null | undefined
) {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (
      events === null ||
      events === undefined ||
      (events as string[]).length === 0
    ) {
      events = [...DEFAULT_EVENTS];
    }

    (events as string[]).forEach((event) => {
      document.addEventListener(event, handleClickOutside);
    });
    return () => {
      (events as string[]).forEach((event) => {
        document.removeEventListener(event, handleClickOutside);
      });
    };
  }, [callback]);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  return ref;
}
