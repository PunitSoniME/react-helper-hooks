import { lazy, Suspense } from 'react';
import { useWindowFocus } from '../../../..';
import { packageName } from '@/lib/utils';
import Muted from '@/common/Muted';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useWindowFocus';

const api = [
    { execute: 'windowFocus', type: 'boolean', description: 'Returns true if your focus is in current window' },
];

export default function WindowFocusComponent() {
    
    const windowFocus = useWindowFocus();

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to hide/show the sensitive information. Below example will help you to understand
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const windowFocus = ${hook}();`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div className='flex justify-between flex-col items-start gap-3'>

                    <Muted>Things will be visible if your focus is in the application</Muted>
                    <Muted>Sensitive information is <span className={`font-semibold ${windowFocus ? "text-green-600" : "text-red-600"}`}>{windowFocus ? 'VISIBLE' : 'HIDDEN'}</span></Muted>

                </div>

            </Block>

        </Suspense>
    )
}
