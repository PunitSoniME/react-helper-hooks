## useStateJson

### A hook that stores a state as a JSON string to prevent unnecessary render updates.
### Updates of values that serialize to the same string are ignored.
### Can be used to ignore duplicate updates of the state including object values.

<br />

> Example

```jsx
import { useState, useEffect } from 'react'
import { useStateJson } from '../../../.';

export default function StateJsonComponent() {

    const [name, setName] = useState("Punit");
    const [email, setEmail] = useState("punit.soni33@gmail.com");

    const [json, setJson] = useStateJson({ id: 1, name: name, email: email });

    useEffect(() => {
        console.log("json updated - ", json)
    }, [json])

    return (
        <>
            <div>Json - {JSON.stringify(json)}</div>
            <br />
            Note: Check console log for json updated ( When you click Update JSON button continuously without changing name or email, it will not rerender the component )

            <br /><br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br /><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />

            <button type="button" onClick={() => {
                setJson({
                    ...json,
                    name: name,
                    email: email
                })
            }}>Update JSON</button>
        </>
    )
}

```
