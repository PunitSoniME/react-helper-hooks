import React, { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useTimeout';
const info = 'Works just like setTimeout, however we created one single hook which can also do reset and clear timeout';

const usage: string = `import { ${hook} } from '${packageName}';

const { clear, reset } = ${hook}(CALLBACK_FUNCTION, TIMEOUT);

/*
    @params
        CALLBACK_FUNCTION - function - Block of code to execute
        TIMEOUT - number - Timer in milliseconds

    @returns
        clear - function - To clear already running timeout
        reset - function - The function to reset the timer again
*/`

export default function TimeoutComponent({ defaultTimeout }: any) {

    return (
        <>
            <Suspense fallback={<></>}>

                <Documentation
                    hook={hook}
                    info={info}
                    usage={usage}
                >
                    <Demo defaultTimeout={defaultTimeout} />
                </Documentation>

            </Suspense>
        </>
    )
}
