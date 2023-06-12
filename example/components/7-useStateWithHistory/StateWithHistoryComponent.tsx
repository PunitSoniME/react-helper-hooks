import React from 'react';
import { useState } from 'react'
import { useStateWithHistory } from '../../../.'

export default function StateWithHistoryComponent() {
    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1);
    const [name, setName] = useState("Punit");

    return (
        <div>
            <div>{count}</div>
            <div>{history.join(", ")}</div>
            <div>Pointer - {pointer}</div>
            <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
            <button onClick={() => go(2)}>Go To Index 2</button>
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>

            <br /><br />
            <div>{name}</div>
            <button onClick={() => setName("Soni")}>Change Name</button>
            <p>This change name variable is used only to show you that whole component is not rerendering when we update other variable</p>
        </div>
    )
}
