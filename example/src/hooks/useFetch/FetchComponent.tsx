import { useState, lazy, Suspense } from 'react';
import { useFetch } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useFetch';

const api = [
    { execute: 'loading', type: 'Boolean', description: 'Loading state ( true or false )' },
    { execute: 'value', type: 'any', description: 'Data we get when async process completed with success response' },
    { execute: 'error', type: 'any', description: 'Data we get when async process rejected' },
];

export default function FetchComponent() {

    const [id, setId] = useState(1);
    const { loading, error, value } = useFetch(`https://reqres.in/api/users/${id}`, {}, [id]);

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
                        {`const { loading, value, error } = ${hook}(URL, DATA_TO_PASS, [DEPENDENCIES]]);`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>
                <div>{id}</div>
                <Button
                    size="sm"
                    onClick={() => setId(currentId => ++currentId)}
                >
                    Next Record
                </Button>

                <div className="flex flex-col flex-wrap gap-3 mt-2">

                    <div>Loading: {loading.toString()}</div>

                    <div>
                        <pre className='text-green-600 font-semibold'>
                            {JSON.stringify(value, null, 2)}
                        </pre>
                    </div>

                    <div>
                        <pre className='text-red-600 font-semibold'>
                            {JSON.stringify(error, null, 2)}
                        </pre>
                    </div>

                </div>
            </Block>

        </Suspense>
    )
}



