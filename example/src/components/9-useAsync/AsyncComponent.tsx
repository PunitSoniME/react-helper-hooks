import React from 'react';
import { useAsync } from 'react-helper-hooks';

export default function AsyncComponent() {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true;

            setTimeout(() => {
                success ? resolve("Success") : reject("Error");
            }, 1500)
        })
    })

    return (
        <div>
            <div>Loading: {loading.toString()}</div>
            <div>{value}</div>
            <div>{error}</div>
        </div>
    )
}
