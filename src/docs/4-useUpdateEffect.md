## useUpdate

### You can use this hook to handle debounce
### debounce - waiting for some time once user stop typing anything

<br />

> Example

```jsx
import React, { useRef, useEffect } from 'react'

export default function useUpdateEffect(callback, dependencies) {
    const firstRendererRef = useRef(true);

    useEffect(() => {
        if (firstRendererRef.current) {
            firstRendererRef.current = false;
            return;
        }
        return callback();
    }, [dependencies]);
}

```