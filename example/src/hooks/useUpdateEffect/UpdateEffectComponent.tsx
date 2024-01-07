import { useState, lazy, Suspense } from 'react';
import { useUpdateEffect } from '../../../../.';
import { Button } from '@/components/ui/button';
import { packageName } from '@/lib/utils';

const Title = lazy(() => import('@/common/Details/Title'));
const Lead = lazy(() => import('@/common/Lead'));
const Block = lazy(() => import('@/common/Details/Block'));

const hook = 'useUpdateEffect';

export default function UpdateEffectComponent() {

    const [count, setCount] = useState(10);

    useUpdateEffect(() => alert(count), [count]);

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                This <code>{hook}</code> will be called after the value of dependencies changed, it will not call on first render
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`${hook}(() => { CODE_TO_EXECUTE }, [DEPENDENCIES]);`}
                    </code>
                </div>
            </Block>

            <Block title='Example'>
                <div className='mb-3'>{count}</div>
                <Button size="sm" onClick={() => setCount(c => c + 1)}>Increment</Button>
            </Block>

        </Suspense>

    )
}
