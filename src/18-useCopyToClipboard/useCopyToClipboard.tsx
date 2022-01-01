import React from 'react'

export default function useCopyToClipboard() {
    const copyToClipboard = async (textToCopy) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
        } catch (error) {
            console.error("Error in copy - ", error.message);
        }
    }

    return copyToClipboard;
}
