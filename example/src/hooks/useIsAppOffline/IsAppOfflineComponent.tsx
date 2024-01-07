import { lazy, Suspense } from 'react';
import { useIsAppOffline } from '../../../../.';
import { packageName } from '@/lib/utils';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useIsAppOffline';

const api = [
    { execute: 'isAppOffline', type: 'Boolean', description: 'Will return true when you don\'t have internet connection' },
];

export default function IsAppOfflineComponent() {

    const isAppOffline = useIsAppOffline();

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to know your application is running of active internet or you are offline
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const isAppOffline = ${hook}();`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

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
            </Block>

        </Suspense>
    )
}
