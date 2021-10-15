import React from 'react'
import { useIsAppOffline } from 'react-helper-hooks';

export default function IsAppOfflineComponent() {

    const isAppOffline = useIsAppOffline();

    return (
        <>
            <p>You can check either you have internet connection or not</p>

            <div className="flex gap-2">
                Your App is: {isAppOffline ? "Offline" : "Online"}
                <div className={isAppOffline ? "offline" : "online"}></div>
            </div>

        </>
    )
}
