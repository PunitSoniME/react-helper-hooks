import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useIsAppOffline';
const info = 'Know your application is running of active internet or you are offline';

const usage: string = `import { ${hook} } from '${packageName}';

const isAppOffline = ${hook}();

/*
    @returns - true when you don\'t have internet connection
*/`

export default function IsAppOfflineComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.2.0"
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
