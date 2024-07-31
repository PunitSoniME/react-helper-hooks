import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useDebounce';
const info = 'This hook execution will wait for sometime once user stop typing anything';

const usage: string = `import { ${hook} } from '${packageName}';

${hook}(() => { CODE_TO_EXECUTE }, TIMER, [DEPENDENCIES]);

/*
    @params
        CALLBACK_FUNCTION - function - A function to execute on debounce.
        TIMER - number - Pass seconds in milliseconds format.
        DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change
*/`

export default function UseDebounceComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.0.0"
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
