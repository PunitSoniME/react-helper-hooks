import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useWindowFocus';
const info = 'Helps you to hide/show the sensitive information. Below example will help you to understand';

const usage: string = `import { ${hook} } from '${packageName}';

const windowFocus = ${hook}();

/*
    @returns
        windowFocus - boolean - Returns true if your focus is in current window
*/`

export default function WindowFocusComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.5.0"
            >
                <Demo />
            </Documentation>

        </Suspense>
    )
}
