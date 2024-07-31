import { lazy, Suspense, useState, useEffect } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useStateJson';
const info = `Stores a state as a JSON string to prevent unnecessary render updates.
Updates of values that serialize to the same string are ignored.
Can be used to ignore duplicate updates of the state including object values.`

const usage: string = `import { ${hook} } from '${packageName}';

const [json, setJson] = ${hook}(OBJECT);

/*
    @params
        object - Object - Pass an object on which you want to do operation

    @returns
        json - Object - Object that stores data
        setJson - function - A function to update the variable
*/`

export default function StateJsonComponent() {

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
