import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useGroupByFirstLetter';
const info = 'Group by your data by first letter';

const usage: string = `import { ${hook} } from '${packageName}';

const groupByFirstLetter = ${hook}();
const groupByData = groupByFirstLetter(DATA, PROPERTY_NAME_TO_GROUP);

/*
    @returns - A function that is used to get the data group by, check below for example
*/`

export default function GroupByFirstLetterComponent() {

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
