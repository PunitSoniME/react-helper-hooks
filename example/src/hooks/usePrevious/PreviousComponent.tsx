import { lazy, Suspense, useState } from 'react';
import { usePrevious } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Muted from '@/common/Muted';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'usePrevious';

const api = [
    { execute: 'previousValue', type: 'any', description: 'It will have previous stored value' },
];

export default function PreviousComponent() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Punit");
    const previousValue = usePrevious(count);

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> returns the previous value of defined variable
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const previousValue = ${hook}(STATE_VARIABLE_TO_TRACK);`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div className="flex flex-col gap-3 mt-2">

                    <div className='flex flex-col gap-2 items-start'>
                        <div>
                            <div>Current Value: {count}</div>
                            <div>Previous Value: {previousValue}</div>
                        </div>

                        <Button size="sm" onClick={() => setCount((value) => value + 1)}>Increment</Button>
                    </div>

                    <hr />

                    <div className='flex flex-col gap-2 items-start'>
                        <div>{name}</div>

                        <Button size="sm" onClick={() => setName("Soni")}>Change Name</Button>
                    </div>

                    <Muted>
                        This change name variable is used only to show you that whole component is not rerendering when we update other variable
                    </Muted>

                </div>
            </Block>

        </Suspense>
    )
}
