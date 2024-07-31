import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useUpdateEffect';
const info = 'Will be called after the value of dependencies changed, it will not call on first render';

const usage: string = `import { ${hook} } from '${packageName}';

${hook}(CALLBACK_FUNCTION, [DEPENDENCIES]);

/*
    @params
        CALLBACK_FUNCTION - function - block of code to execute
        DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change
*/`

export default function UpdateEffectComponent() {

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
