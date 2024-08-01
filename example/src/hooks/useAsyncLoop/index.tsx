import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useAsyncLoop';
const info = 'Helps you to work on async functionality.';

const usage: string = `import { ${hook} } from '${packageName}';

const { loading, value, error } = ${hook}(CALLBACK_FUNCTION, [DEPENDENCIES]);

/*
    @params
        CALLBACK_FUNCTION - function - block of code to execute
        DEPENDENCIES - Array<any> - Collection of dependencies, Callback function will execute when the value of any dependencies change

    @returns
        loading - boolean - Loading state ( true or false )
        value - any - Data we get when async process completed with success response
        error - any - Data we get when async process rejected
*/`

export default function AsyncLoopComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
