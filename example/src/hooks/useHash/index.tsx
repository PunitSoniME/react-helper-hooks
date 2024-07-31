import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useHash';
const info = 'Helps you to get current hash and allows you to update the hash of URL';

const usage: string = `import { ${hook} } from '${packageName}';

const [hash, updateHash] = ${hook}(INITIAL_VALUE);

/*
    @returns
        hash - any - Variable name
        updateHash - function - The function to update the value of the variable
*/`

export default function HashComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.10.1"
            >
                <Demo />
            </Documentation>

        </Suspense>

    )
}
