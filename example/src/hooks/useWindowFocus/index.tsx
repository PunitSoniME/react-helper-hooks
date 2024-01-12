import { lazy, Suspense } from 'react';
import { useWindowFocus } from '../../../..';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useWindowFocus';
const info = 'Helps you to hide/show the sensitive information. Below example will help you to understand';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @returns
            windowFocus - boolean - Returns true if your focus is in current window
    */
    const windowFocus = ${hook}();
}`

export default function WindowFocusComponent() {

    const windowFocus = useWindowFocus();

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>

                    <div className='flex justify-between flex-col items-start gap-3'>

                        <Muted>Things will be visible if your focus is in the application</Muted>
                        <Muted>Sensitive information is <span className={`font-semibold ${windowFocus ? "text-green-600" : "text-red-600"}`}>{windowFocus ? 'VISIBLE' : 'HIDDEN'}</span></Muted>

                    </div>

                </Block>
            </Documentation>
            
        </Suspense>
    )
}
