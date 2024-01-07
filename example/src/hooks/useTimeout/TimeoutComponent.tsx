import React, { Fragment, lazy, Suspense } from 'react';
import { useState } from 'react'
import { useTimeout } from '../../../../.';
import { Button } from '@/components/ui/button';
import { packageName } from '@/lib/utils';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useTimeout';

const defaultTimer = 15000 / 1000;

const api = [
    { execute: 'clear', type: 'function', description: 'To clear already running timeout' },
    { execute: 'reset', type: 'function', description: 'The function to reset the timer again' }
];

export default function TimeoutComponent({ defaultTimeout }: any) {

    const [count, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(0), defaultTimeout);

    return (
        <>
            <Suspense fallback={<></>}>

                <Title>{hook}</Title>

                <Lead className='text-md'>
                    The <code>{hook}</code> works just like setTimeout, however we created one single hook which can also do reset and clear timeout
                </Lead>

                <Block title='Usage'>
                    <div className='flex flex-col gap-5'>
                        <code>
                            {`import { ${hook} } from "${packageName}";`}
                        </code>
                        <code>
                            {`const { clear, reset } = ${hook}(() => { CODE_TO_EXECUTE }, TIMER_IN_MILLISECONDS);`}
                        </code>
                    </div>
                </Block>

                <Api api={api} />

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

            </Suspense>

        </>
    )
}
