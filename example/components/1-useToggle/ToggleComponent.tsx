import React from 'react'; 
import { useToggle } from '../../../.';

export default function ToggleComponent() {

    const [isSelected, toggleSelected] = useToggle(false);

    return (
        <div>
            <div>{isSelected.toString()}</div>
            <button onClick={toggleSelected}>Toggle</button>
            <button onClick={() => toggleSelected(true)}>Make True</button>
            <button onClick={() => toggleSelected(false)}>Make False</button>
        </div>
    )
}
