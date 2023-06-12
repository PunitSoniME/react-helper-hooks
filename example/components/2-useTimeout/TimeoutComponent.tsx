import React from 'react';
import { useState } from 'react'
import { useTimeout } from '../../../.';

export default function TimeoutComponent({ defaultTimeout }: any) {
    const [count, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(0), defaultTimeout);

    return (
        <>
            <h3>
                This hook work just like setTimeout, however we created one single hook
                which can also do reset and clear timeout
            </h3>
            <br />
            <h4>
                In this example, when page reloads, it will wait for 3 seconds and then
                value will be changed to 0
            </h4>
            <h4>
                If you click on Clear Timeout button with in 3 seconds, then it will not
                change the value
            </h4>
            <h4>
                If you click on Reset Timeout button, it will restart the timer of 3
                seconds
            </h4>
            <br /><br />
            <div>
                <div>{count}</div>
                <button onClick={() => setCount(c => c + 1)}>Increment</button>
                &emsp;
                <button onClick={clear}>Clear Timeout</button>
                &emsp;
                <button onClick={reset}>Reset Timeout</button>
            </div>
        </>
    )
}
