## useAsyncLoop

### This hook will help you to work on async functionality. Below example will help you to write a code which can execute after completing all async calls ( api calls )

<br />

> Example

```jsx
import React, { useEffect, useCallback } from 'react'
import { useAsyncLoop } from 'react-helper-hooks';

export default function AsyncLoopComponent() {
    const executeLoop = useAsyncLoop();

    const data = [
        "https://reqres.in/api/users?page=1",
        "https://reqres.in/api/users?page=2",
        "https://reqres.in/api/users?page=3",
        "https://reqres.in/api/users?page=4",
        "https://reqres.in/api/users?page=5"
    ]

    const executeAsyncLoop = useCallback(async () => {
        await executeLoop(data, async (d) => {
            await fetch(d).then((response) => {
                if (response.status !== 200) {
                    console.error('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                return response.json().then(function (data) {
                    console.log(data);
                });
            })
        })

        console.log("All Executed");
        
    }, [data, executeLoop]);

    useEffect(() => {
        executeAsyncLoop();
    }, [executeAsyncLoop])

    return (
        <div>
            Check console for the sequences
        </div>
    )
}

```
