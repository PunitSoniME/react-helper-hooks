import { useState, useMemo, useCallback } from 'react';

/**
 * @since 1.5.5
 */
export default function useStateJson(initialState: Object | any[]) {
  const [json, setState] = useState(() => JSON.stringify(initialState));
  const value = useMemo(() => JSON.parse(json), [json]);
  const setValue = useCallback((next: any) => {
    const nextJson = JSON.stringify(next);
    if (nextJson !== json) setState(nextJson);
  }, []);
  return [value, setValue];
}
