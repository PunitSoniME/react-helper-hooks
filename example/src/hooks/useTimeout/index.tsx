import React, { lazy, Suspense } from 'react';
import { useState } from 'react'
import { useTimeout } from '../../../..';
import { Button } from '@/components/ui/button';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useTimeout';
const info = 'Works just like setTimeout, however we created one single hook which can also do reset and clear timeout';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            CALLBACK_FUNCTION - function - Block of code to execute
            TIMEOUT - number - Timer in milliseconds

        @returns
            clear - function - To clear already running timeout
            reset - function - The function to reset the timer again
    */
    const { clear, reset } = ${hook}(CALLBACK_FUNCTION, TIMEOUT);
}`

const defaultTimer = 15000 / 1000;

export default function TimeoutComponent({ defaultTimeout }: any) {

    const [count, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(0), defaultTimeout);

    return (
        <>
            <Suspense fallback={<></>}>

                <Documentation
                    hook={hook}
                    info={info}
                    usage={usage}
                >
                    <Block title='Example'>

                        <ul className='list-decimal pl-5 mb-5'>
                            <li>
                                In this example, when page reloads, it will wait for {defaultTimer} seconds and then value will be changed to 0
                            </li>
                            <li>
                                If you click on Clear Timeout button with in {defaultTimer} seconds, then it will not change the value
                            </li>
                            <li>
                                If you click on Reset Timeout button, it will restart the timer of {defaultTimer} seconds
                            </li>
                        </ul>

                        <div className="mb-2">{count}</div>

                        <div className='flex gap-3'>
                            <Button size="sm" onClick={() => setCount(c => c + 1)}>Increment</Button>
                            <Button size="sm" onClick={clear}>Clear Timeout</Button>
                            <Button size="sm" onClick={reset}>Reset Timeout</Button>
                        </div>

                    </Block>
                </Documentation>

            </Suspense>
        </>
    )
}
