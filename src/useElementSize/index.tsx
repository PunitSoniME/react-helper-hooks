import { useEffect, useRef, useState } from 'react';

type Dimensions = Pick<DOMRectReadOnly, 'height' | 'width'>;

/**
 * Custom hook to get the size (width and height) of a DOM element.
 *
 * This hook returns a ref that should be attached to the target element,
 * and the current dimensions (width and height) of that element.
 * It uses a `ResizeObserver` to update the dimensions whenever the element is resized.
 *
 * @returns {Object} - An object containing the ref to be attached to the element,
 *                     and the current width and height of the element.
 * @property {Object} ref - React ref to be attached to the target element.
 * @property {number} width - Current width of the element.
 * @property {number} height - Current height of the element.
 *
 * @example
 *
 * function Component() {
 *   const { ref, width, height } = useElementSize();
 *
 *   return (
 *     <textarea ref={ref}>
 *       Width: {width}, Height: {height}
 *     </textarea>
 *   );
 * }
 *
 * @since 1.12.0
 */
export default function useElementSize(): object {
  const ref = useRef<any>(null);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return { ref, ...dimensions };
}
