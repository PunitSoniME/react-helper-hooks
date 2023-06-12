import React from 'react';
import { useWindowFocus } from '../../../.';

export default function WindowFocusComponent() {
    const windowFocus = useWindowFocus();

    return (
        <div>
            <h4>Things will be visible if your focus is in the application</h4>
            <br />
            <h5>Sensitive information is <span style={{ color: windowFocus ? "blue" : "red" }}>{windowFocus ? 'VISIBLE' : 'HIDDEN'}</span></h5>
        </div>
    )
}
