## useWindowFocus

### This hook will help you to hide/show the sensitive information. Below example will help you to understand

<br />

> Example

```jsx
 
import { useWindowFocus } from 'react-helper-hooks';

export default function WindowFocus() {
    const windowFocus = useWindowFocus();

    return (
        <div>
            <h4>Things will be visible if your focus is in the application</h4>
            <br />
            <h5>Sensitive information is <span style={{ color: windowFocus ? "blue" : "red" }}>{windowFocus ? 'VISIBLE' : 'HIDDEN'}</span></h5>
        </div>
    )
}


```
