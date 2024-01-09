import { lazy, Suspense } from 'react';
import { useToggle } from '../../../../.';
import { Button } from '@/components/ui/button';
import { packageName } from '@/lib/utils';

const Title = lazy(() => import('@/common/Details/Title'));
const Lead = lazy(() => import('@/common/Lead'));
const Block = lazy(() => import('@/common/Details/Block'));

const hook = 'useToggle';

export default function ToggleComponent() {

    const [isSelected, toggleSelected] = useToggle(false);

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> hook is a custom React hook that facilitates toggling between two states.
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`const [isSelected, toggleSelected] = ${hook}(false);`}
                    </code>
                </div>
            </Block>

            <Block title='Example' >
                <div className="mb-2">{isSelected.toString()}</div>
                <div className='flex gap-3'>
                    <Button size="sm" onClick={toggleSelected}>Toggle</Button>
                    <Button size="sm" onClick={() => toggleSelected(true)}>Make True</Button>
                    <Button size="sm" onClick={() => toggleSelected(false)}>Make False</Button>
                </div>
            </Block>

        </Suspense>

    )
}
