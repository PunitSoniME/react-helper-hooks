import { lazy, Suspense, useState, useEffect } from 'react';
import { useStateWithHistory } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Muted from '@/common/Muted';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useStateWithHistory';

const api = [
    { execute: 'value', type: 'Object', description: 'Object that stores data' },
    { execute: 'set', type: 'function', description: 'Call this function to update data' },
    { execute: 'data', type: '{ history, pointer, back, forward, go }', description: 'Call this function to scroll to top' },
];

export default function StateWithHistoryComponent() {

    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1);
    const [name, setName] = useState("Punit");

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> used to maintain history of any data
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const [count, setCount, { history, pointer, back, forward, go }] = ${hook}(INITIAL_VALUE);`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div className='flex justify-between flex-col items-start gap-3'>

                    <div>Total Values - {count}</div>
                    <div>History - {history.join(", ")}</div>
                    <div>Pointer - {pointer}</div>

                    <div className='flex gap-3 border-b pb-4'>
                        <Button size="sm" onClick={() => setCount((currentCount: any) => currentCount * 2)}>Double</Button>
                        <Button size="sm" onClick={() => setCount((currentCount: any) => currentCount + 1)}>Increment</Button>
                        <Button size="sm" onClick={() => go(2)}>Go To Index 2</Button>
                        <Button size="sm" onClick={back}>Back</Button>
                        <Button size="sm" onClick={forward}>Forward</Button>
                    </div>

                    <p>{name}</p>
                    <Button size="sm" variant="outline" onClick={() => setName("Soni")}>Change Name</Button>

                    <Muted>
                        This change name variable is used only to show you that whole component is not rerendering when we update other variable
                    </Muted>

                </div>
            </Block>

        </Suspense>
    )
}
