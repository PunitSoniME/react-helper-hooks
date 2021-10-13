## useTimeout

### You can use this hook to handle timeout functionalities such as clearTimeout, setTimeout
### Further more you can reset timeout with this hook as well.

<br />

> Example

```jsx
import { useTimeout } from 'react-helper-hooks'

export default function TimeoutComponent() {

    const [count, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(0), 3000);

    return (
        <>
            <h3>
                This hook work just like setTimeout, however we created one single hook
                which can also do reset and clear timeout
            </h3>

            <h4>
                In this example, when page reloads, it will wait for 3 seconds and then
                value will be changed to 0
            </h4>
            <h4>
                If you click on Clear Timeout button with in 3 seconds, then it will not
                change the value
            </h4>
            <h4>
                If you click on Reset Timeout button, it will restart the timer of 3
                seconds
            </h4>

            <div>
                <div>{count}</div>
                <button onClick={() => setCount(c => c + 1)}>Increment</button>
                &emsp;
                <button onClick={clear}>Clear Timeout</button>
                &emsp;
                <button onClick={reset}>Reset Timeout</button>
            </div>
        </>
    )
}
```