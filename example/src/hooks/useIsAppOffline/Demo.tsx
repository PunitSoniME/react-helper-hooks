import { useIsAppOffline } from '../../../..';

export default function Demo() {

    const isAppOffline = useIsAppOffline();

    return (
        <div className="flex flex-col gap-3 mt-2">

            <p>You can check either you have internet connection or not</p>

            <div className="flex gap-2 items-center">
                Your internet connection is: <span className={`font-semibold ${isAppOffline ? "text-red-600" : "text-green-600"}`}>
                    {isAppOffline ? "Offline" : "Online"}
                </span>

                <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isAppOffline ? "bg-red-600" : "bg-green-600"} opacity-75`}></span>
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isAppOffline ? "bg-red-600" : "bg-green-600"}`}></span>
                </span>

                <div className={`h-2 w-2 rounded animate-ping `}></div>
            </div>

        </div>
    )
}
