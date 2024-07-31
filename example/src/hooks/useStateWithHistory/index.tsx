import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useStateWithHistory';
const info = 'Used to maintain history of any data';

const usage: string = `import { ${hook} } from '${packageName}';

const [value, set, { history, pointer, back, forward, go }] = ${hook}(INITIAL_VALUE);

/*
    @params
        INITIAL_VALUE - any - Initial value to track history

    @returns
        value - Object- Object that stores data
        set - function- Call this function to update data
        methods - { history, pointer, back, forward, go } - Call this function to scroll to top
*/`

export default function StateWithHistoryComponent() {

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
