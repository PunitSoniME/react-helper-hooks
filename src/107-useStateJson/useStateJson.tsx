import React, { useState, useMemo, useCallback } from 'react'

export default function useStateJson(initialState) {
    const [json, setState] = useState(() => JSON.stringify(initialState));
    const value = useMemo(() => JSON.parse(json), [json]);
    const setValue = useCallback(
        (next) => {
            const nextJson = JSON.stringify(next);
            if (nextJson !== json) setState(nextJson);
        }, [])
    return [value, setValue];
}
