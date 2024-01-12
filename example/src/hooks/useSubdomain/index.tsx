import { lazy, Suspense } from 'react';
import { useSubdomain } from '../../../..';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useSubdomain';
const info = 'Returns the subdomain of the application from url';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns
            subdomain - string - Returns the subdomain
            
    */
    const subdomain = ${hook}();
}`

export default function SubdomainComponent() {

    const subdomain = useSubdomain(0);

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>

                    <Muted>
                        Your application's sub domain is - <b>{subdomain}</b>
                    </Muted>

                </Block>

            </Documentation>

        </Suspense>
    )
}

