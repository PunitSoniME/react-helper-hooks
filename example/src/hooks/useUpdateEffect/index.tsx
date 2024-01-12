import { useState, lazy, Suspense } from 'react';
import { useUpdateEffect } from '../../../..';
import { Button } from '@/components/ui/button';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useUpdateEffect';
const info = 'Will be called after the value of dependencies changed, it will not call on first render';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            CALLBACK_FUNCTION - function - block of code to execute
            DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change
    */
    ${hook}(() => { CODE_TO_EXECUTE }, [DEPENDENCIES]);
}`

export default function UpdateEffectComponent() {

    const [count, setCount] = useState(10);

    useUpdateEffect(() => alert(count), [count]);

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>
                    <div className='mb-3'>{count}</div>
                    <Button size="sm" onClick={() => setCount(c => c + 1)}>Increment</Button>
                </Block>
            </Documentation>

        </Suspense>
    )
}
