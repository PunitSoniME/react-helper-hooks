import { lazy, Suspense } from 'react';
import { useAsync } from '../../../../.';
import { packageName } from '@/lib/utils';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useAsync';

const api = [
    { execute: 'loading', type: 'Boolean', description: 'Loading state ( true or false )' },
    { execute: 'value', type: 'any', description: 'Data we get when async process completed with success response' },
    { execute: 'error', type: 'any', description: 'Data we get when async process rejected' },
];

export default function AsyncComponent() {

    const { loading, value, error } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true;

            setTimeout(() => {
                success ? resolve("Success") : reject("Error");
            }, 1500)
        })
    })

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to handle async method
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`const { loading, value, error } = ${hook}(CALLBACK_FUNCTION, [DEPENDENCIES]]);`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>
                <div>Loading: {loading.toString()}</div>

                <div className="flex flex-row flex-wrap gap-3 mt-2">
                    <div className='text-green-600 font-semibold'>{value}</div>
                    <div className='text-red-600 font-semibold'>{error}</div>
                </div>
            </Block>

        </Suspense>
    )
}

