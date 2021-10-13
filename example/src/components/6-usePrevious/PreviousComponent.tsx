import React, { useState } from 'react'
import { usePrevious } from 'react-helper-hooks';

export default function PreviousComponent() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Punit")
    const previousCount = usePrevious(count);

    return (
        <div>
            <div>
                <div>{count} - {previousCount}</div>
            </div>
            <div>{name}</div>
            <button onClick={() => setCount(value => value + 1)}>Increment</button>

            <button onClick={() => setName("Soni")}>Change Name</button>
        </div>
    )
}
