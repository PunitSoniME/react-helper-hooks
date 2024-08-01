import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useSubdomain';
const info = 'Returns the subdomain of the application from url';

const usage: string = `import { ${hook} } from '${packageName}';

const subdomain = ${hook}();

/*
    @returns
        subdomain - string - Returns the subdomain
*/`

export default function SubdomainComponent() {

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

