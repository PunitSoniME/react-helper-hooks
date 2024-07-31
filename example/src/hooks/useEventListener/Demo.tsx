import { useState } from 'react';
import { useEventListener } from '../../../..';

export default function Demo() {

    const [key, setKey] = useState("");
    useEventListener("keydown", (e: any) => {
        setKey(e.key);
    });

    return (
        <div>
            Press any key to test the keydown event listener: <b>{key}</b>
        </div>
    )
}
