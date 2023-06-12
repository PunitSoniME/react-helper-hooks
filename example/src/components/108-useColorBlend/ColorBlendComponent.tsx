import React from 'react';
import { useColorBlend } from 'react-helper-hooks';

export default function ColorBlendComponent() {

    const [red, green, blue] = useColorBlend([100, 65, 250], [3, 204, 99])

    return (
        <div style={{ background: `rgb(${red},${green},${blue})`, padding: "1rem 2rem" }}>
            <h1>Red - {red}</h1>
            <h1>Green - {green}</h1>
            <h1>Blue - {blue}</h1>
        </div>
    )
}
