import { lazy, Suspense, useState } from 'react';
import { usePrevious } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Muted from '@/common/Muted';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'usePrevious';
const info = 'Returns the previous value of defined variable';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @param - STATE_VARIABLE_TO_TRACK - Pass the variable you declared as useState

        @returns - Last stored value of the variable you passed in hook
    */
    const previousValue = ${hook}(STATE_VARIABLE_TO_TRACK);
}`

export default function PreviousComponent() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Punit");
    const previousValue = usePrevious(count);

    return (
        <Suspense fallback={<>Loading...</>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
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
            </Documentation>

        </Suspense>
    )
}
