import { lazy, Suspense } from 'react';
import { useArray } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useArray';

const api = [
    { execute: 'array', type: 'array', description: 'Data on which operation to perform' },
    { execute: 'set', type: 'function', description: 'Re-initialize the array with new data' },
    { execute: 'push', type: 'function', description: 'Insert an element in array' },
    { execute: 'remove', type: 'function', description: 'Remove an element from array' },
    { execute: 'filter', type: 'function', description: 'Filter out the data from array ( This will mutate the source )' },
    { execute: 'update', type: 'function', description: 'Update any element of array' },
    { execute: 'clear', type: 'function', description: 'Clear whole array' }
];

export default function ArrayComponent() {

    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6])

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> contains many methods of array like push, update, remove, filter, update, clear etc...
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`const { array, set, push, remove, filter, update, clear } = ${hook}([DATA]]);`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div>{array.join(", ")}</div>

                <div className="flex flex-row flex-wrap gap-3 mt-2">
                    <Button size="sm" onClick={() => push(((Math.random() + 1) * 10).toFixed(0))}>Add random number</Button>
                    <Button size="sm" onClick={() => update(1, 9)}>Update 2nd element to 9</Button>
                    <Button size="sm" onClick={() => remove(1)}>Remove Second Element</Button>
                    <Button size="sm" onClick={() => filter(f => f < 3)}>Keep numbers less than 3</Button>
                    <Button size="sm" onClick={() => set([1, 2])}>Set 1 to 2</Button>
                    <Button size="sm" onClick={clear}>Clear</Button>
                </div>
            </Block>

        </Suspense>
    )
}

