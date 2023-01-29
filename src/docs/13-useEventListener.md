## useEventListener

### This hook will help you to handle eventListener functionalities

<br />

> Example

```jsx
import { useState } from 'react'
import { useEventListener } from 'react-helper-hooks';

export default function EventListenerComponent() {

    const [key, setKey] = useState("");
    useEventListener("keydown", e => {
        setKey(e.key);
    })

    return (
        <div>
            Last key pressed: {key}
        </div>
    )
}

```
