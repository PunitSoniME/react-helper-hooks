## useStorage

### This hooks will help you to handle localStorage and sessionStorage

<br />

> Example

```jsx
import React from 'react'
import { useSessionStorage, useLocalStorage } from 'react-helper-hooks';

export default function StorageComponent() {

    const [name, setName, removeName] = useSessionStorage("name", "Punit");
    const [city, setCity, removeCity] = useLocalStorage("city", "Patan");

    return (
        <>
            <h3>Local Storage</h3>
            <p>Name: {name}</p>

            <br />

            <button onClick={() => setName("Soni")}>Set Name</button>
            <button onClick={removeName}>Remove Name</button>

            <br /> <br />
            <hr />
            <br />

            <h3>Session Storage</h3>
            <p>City - {city}</p>

            <br />
            <button onClick={() => setCity("Ahmedabad")}>Set City</button>
            <button onClick={removeCity}>Remove City</button>

            <br />
        </>
    )
}

```