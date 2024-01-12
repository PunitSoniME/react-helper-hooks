import { lazy, Suspense, useState, useEffect } from 'react';
import { useStateWithHistory } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Muted from '@/common/Muted';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useStateWithHistory';
const info = 'Used to maintain history of any data';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            value - any - Initial value to track history

        @returns
            value - Object- Object that stores data
            set - function- Call this function to update data
            data - { history, pointer, back, forward, go } - Call this function to scroll to top
            
    */
    const [count, setCount, { history, pointer, back, forward, go }] = ${hook}(INITIAL_VALUE);
}`

export default function StateWithHistoryComponent() {

    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistory(1);
    const [name, setName] = useState("Punit");

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

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
            </Documentation>
            
        </Suspense>
    )
}
