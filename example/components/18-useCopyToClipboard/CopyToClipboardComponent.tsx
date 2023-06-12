import React from 'react';
import { useState } from 'react'
import { useCopyToClipboard } from '../../../.'

export default function CopyToClipboardComponent() {

    const [textToCopy, setTextToCopy] = useState("Text To Copy")
    const copyToClipboard = useCopyToClipboard();

    return (
        <div style={{ display: 'flex', gap: "1rem" }}>

            <input type="text" value={textToCopy} onChange={(e) => { setTextToCopy(e.target.value) }} />

            <button
                type="button"
                onClick={() => {
                    copyToClipboard(textToCopy).then(() => {
                        alert("Copied to clipboard");
                    }).catch((error) => {
                        alert(error)
                    });
                }}
            >
                Click to copy
            </button>
        </div>
    )
}
