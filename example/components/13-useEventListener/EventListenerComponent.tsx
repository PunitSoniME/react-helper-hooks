import React from 'react';
import { useState } from 'react'
import { useEventListener } from '../../../.';

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
