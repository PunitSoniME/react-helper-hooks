## useArray

### This hook contains many methods of array like push, update, remove, filter, update, clear etc...

<br />

> Example

```jsx
 
import { useArray } from 'react-helper-hooks';;

export default function ArrayComponent() {

    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])

    return (
        <div>
            <div>{array.join(", ")}</div>
            <button onClick={() => push(((Math.random() + 1) * 10).toFixed(0))}>Add random number</button>
            <button onClick={() => update(1, 9)}>Update 2nd element to 9</button>
            <button onClick={() => remove(1)}>Remove Second Element</button>
            <button onClick={() => filter(f => f < 3)}>Keep numbers less than 3</button>
            <button onClick={() => set([1, 2])}>Set 1 to 2</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}

```