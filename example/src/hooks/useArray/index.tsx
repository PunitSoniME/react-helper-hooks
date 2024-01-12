import { lazy, Suspense } from 'react';
import { useArray } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useArray';
const info = 'Useful to use methods of array like push, update, remove, filter, update, clear etc...';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params - Array - The datasource as an array

        @returns
            array - Array - Data on which operation to perform
            set - function - Re-initialize the array with new data
            push - function - Insert an element in array
            remove - function - Remove an element from array
            filter - function - Filter out the data from array ( This will mutate the source )
            update - function - Update any element of array
            clear - function - Clear whole array
    */
    const { array, set, push, remove, filter, update, clear } = ${hook}([DATA]);
}`

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

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
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


            </Documentation>

        </Suspense>
    )
}

