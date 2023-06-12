import React from 'react';
import { useState } from 'react'
import { useUpdateEffect } from 'react-helper-hooks';

export default function UpdateEffectComponent() {

    const [count, setCount] = useState(10);

    useUpdateEffect(() => alert(count), [count]);

    return (
        <div>
            <p>This hook will be called after the value of <code>useUpdateEffect dependencies</code> changed, it will not call on first render</p>
            <br />

            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}
