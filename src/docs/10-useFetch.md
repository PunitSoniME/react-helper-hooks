## useFetch

### This hooks will help you to handle fetch functionalities, which internally uses useAsync hook for async process

<br />

> Example

```jsx
import { useState } from 'react'
import { useFetch } from '../../../.';

export default function FetchComponent() {

    const [id, setId] = useState(1)
    const { loading, error, value } = useFetch(`https://reqres.in/api/users/${id}`, {}, [id])

    return (
        <div>
            <div>{id}</div>
            <button onClick={() => setId(currentId => ++currentId)}>Next Record</button>

            <br /><br />
            <div>Loading: {loading.toString()}</div>
            <div>{JSON.stringify(value, null, 2)}</div>
            <div>{JSON.stringify(error, null, 2)}</div>
        </div>
    )
}

```