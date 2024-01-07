import { lazy, Suspense, useCallback, useEffect } from 'react';
import { useAsyncLoop } from '../../../../.';
import { packageName } from '@/lib/utils';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useAsyncLoop';

const api = [
    { execute: 'loading', type: 'Boolean', description: 'Loading state ( true or false )' },
    { execute: 'value', type: 'any', description: 'Data we get when async process completed with success response' },
    { execute: 'error', type: 'any', description: 'Data we get when async process rejected' },
];

export default function AsyncLoopComponent() {

    const executeLoop = useAsyncLoop();

    const data = [
        "https://reqres.in/api/users?page=1",
        "https://reqres.in/api/users?page=2",
        "https://reqres.in/api/users?page=3",
        "https://reqres.in/api/users?page=4",
        "https://reqres.in/api/users?page=5"
    ]

    const executeAsyncLoop = useCallback(async () => {
        await executeLoop(data, async (d: any) => {
            await fetch(d).then((response) => {
                if (response.status !== 200) {
                    console.error('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return null;
                }

                return response.json().then(function (data) {
                    console.log(data);
                });
            })
        })

        console.log("All Executed");

    }, [data, executeLoop]);

    useEffect(() => {
        executeAsyncLoop();
    }, [executeAsyncLoop])

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to work on async functionality.
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
                <p>This example will help you to write a code which can execute after completing all async calls ( api calls )</p>
                <br />
                <p>Check console for the sequences</p>
            </Block>

        </Suspense>
    )
}
