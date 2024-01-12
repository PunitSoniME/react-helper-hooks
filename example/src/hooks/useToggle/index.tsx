import { lazy, Suspense } from 'react';
import { useToggle } from '../../../..';
import { Button } from '@/components/ui/button';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useToggle';
const info = 'Used to handle the toggeling of the variable';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            INITIAL_VALUE - any - Initial value of variable

        @returns
            isSelected - any - Variable name
            toggleSelected - function - The function to update the value of the variable
    */
    const [isSelected, toggleSelected] = ${hook}(INITIAL_VALUE);
}`

export default function ToggleComponent() {

    const [isSelected, toggleSelected] = useToggle(false);

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example' >
                    <div className="mb-2">{isSelected.toString()}</div>
                    <div className='flex gap-3'>
                        <Button size="sm" onClick={toggleSelected}>Toggle</Button>
                        <Button size="sm" onClick={() => toggleSelected(true)}>Make True</Button>
                        <Button size="sm" onClick={() => toggleSelected(false)}>Make False</Button>
                    </div>
                </Block>

            </Documentation>

        </Suspense>

    )
}
