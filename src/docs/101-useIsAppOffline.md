## useIsAppOffline

### This hook will help you to know your application is running of active internet or you are offline

<br />

> Example

```jsx
 
import { useIsAppOffline } from 'react-helper-hooks';

export default function IsAppOfflineComponent() {

    const isAppOffline = useIsAppOffline();

    return (
        <>
            <p>This hook will help you to know your application is running of active internet or you are offline</p>

            <div className="flex gap-2">
                Your App is: {isAppOffline ? "Offline" : "Online"}
                <div className={isAppOffline ? "offline" : "online"}></div>
            </div>
        </>
    )
}

```
