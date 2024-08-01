import { useEffect, useRef, useState } from 'react';

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

/**
 * Custom hook to observe and get the bounding client rect of a DOM element.
 *
 * This hook returns a ref that should be attached to the target element,
 * and the current bounding client rect of that element.
 * It uses a `ResizeObserver` to update the rect whenever the element is resized.
 *
 * @returns {Array} - An array containing the ref to be attached to the element,
 *                    and the current bounding client rect of the element.
 * @property {Object} 0 - React ref to be attached to the target element.
 * @property {ObserverRect} 1 - Current bounding client rect of the element.
 *
 * @example
 *
 * function Component() {
 *   const [ref, rect] = useResizeObserver();
 *
 *   return (
 *     <textarea ref={ref}>
 *       {rect && `Top: ${rect.top}, Left: ${rect.left}, Width: ${rect.width}, Height: ${rect.height}`}
 *     </textarea>
 *   );
 * }
 *
 * @since 1.12.0
 */
export default function useResizeObserver(): Array<any> {
  const ref = useRef<any>(null);
  const [rect, setRect] = useState<ObserverRect>();

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        const boundingRect = ref.current.getBoundingClientRect();
        setRect(boundingRect);
      }
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return [ref, rect];
}
