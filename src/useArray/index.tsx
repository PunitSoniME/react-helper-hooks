import { useState } from 'react';

/**
 * @since 1.0.0
 */
export default function useArray<T>(defaultValue: T[]) {
  const [array, setArray] = useState(defaultValue);

  function push(element: T) {
    setArray((a) => [...a, element]);
  }

  function filter(callback: Function) {
    //  @ts-ignore
    setArray((a) => a.filter(callback));
  }

  function update(index: number, newElement: T) {
    setArray(array.splice(index, 1, newElement) && [...array]);
  }

  function remove(index: number) {
    setArray(array.filter((_, i) => index !== i));
  }

  function clear() {
    setArray([]);
  }

  return { array, set: setArray, push, filter, update, remove, clear };
}
