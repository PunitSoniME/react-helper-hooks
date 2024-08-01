import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'usePrevious';
const info = 'Returns the previous value of defined variable';

const usage: string = `import { ${hook} } from '${packageName}';

const previousValue = ${hook}(STATE_VARIABLE_TO_TRACK);

/*
    @param
        STATE_VARIABLE_TO_TRACK - Pass the variable you declared as useState

    @returns
        Last stored value of the variable you passed in hook
*/`

export default function PreviousComponent() {

    return (
        <Suspense fallback={<>Loading...</>}>

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
