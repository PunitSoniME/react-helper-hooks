import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';


const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useArray';
const info = 'Useful to use methods of array like push, update, remove, filter, update, clear etc...';

const usage: string = `import { ${hook} } from '${packageName}';

const { array, set, push, remove, filter, update, clear } = ${hook}([DATA]);

/*
    @params
        Array - The datasource as an array

    @returns
        array - Array - Data on which operation to perform
        set - function - Re-initialize the array with new data
        push - function - Insert an element in array
        remove - function - Remove an element from array
        filter - function - Filter out the data from array ( This will mutate the source )
        update - function - Update any element of array
        clear - function - Clear whole array
*/`

export default function ArrayComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Demo />

            </Documentation>
        </Suspense>
    )
}

