import React, { useState } from 'react'
import { useCopyToClipboard } from 'react-helper-hooks'

export default function CopyToClipboardComponent() {

    const [textToCopy, setTextToCopy] = useState("Text To Copy")
    const copyToClipboard = useCopyToClipboard();

    return (
        <div style={{ display: 'flex', gap: "1rem" }}>

            <input type="text" value={textToCopy} onChange={(e) => { setTextToCopy(e.target.value) }} />

            <button
                type="button"
                onClick={() => {
                    copyToClipboard(textToCopy);
                    alert("Copied to clipboard");
                }}
            >
                Click to copy
            </button>
        </div>
    )
}
