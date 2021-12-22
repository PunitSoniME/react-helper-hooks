## useGeolocation

### This hook will help you to get latitude and longitude of user

<br />

> Example

```jsx
import React from 'react'
import { useGeolocation } from 'react-helper-hooks'

export default function GeolocationComponent() {
    const { loading, error, data: { latitude, longitude } } = useGeolocation(null);

    return (
        <div>
            <div>Loading: {loading?.toString()}</div>
            <div>Error: {error?.toString()}</div>
            <div>
                {latitude} x {longitude}
            </div>
        </div>
    )
}

```
