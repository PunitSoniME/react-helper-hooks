import { lazy, Suspense } from 'react';
import { useScrollToTop } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useScrollToTop';

const api = [
    { execute: 'scroll', type: 'function', description: 'Call this function to scroll to top' },
];

export default function ScrollToTopComponent() {

    const scrollToTop = useScrollToTop();

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to scroll to top with smooth transition
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>

                    <code>
                        {`const scroll = ${hook}();`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

        </Suspense>
    )
}

