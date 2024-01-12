import { lazy, Suspense, useCallback, useEffect } from 'react';
import { useAsyncLoop } from '../../../..';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useAsyncLoop';
const info = 'Helps you to work on async functionality.';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            CALLBACK_FUNCTION - function - block of code to execute
            DEPENDENCIES - Array<any> - Collection of dependencies, Callback function will execute when the value of any dependencies change

        @returns
            loading - boolean - Loading state ( true or false )
            value - any - Data we get when async process completed with success response
            error - any - Data we get when async process rejected
    */
    const { loading, value, error } = ${hook}(CALLBACK_FUNCTION, [DEPENDENCIES]);
}`

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

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >

                <Block title='Example'>
                    <p>This example will help you to write a code which can execute after completing all async calls ( api calls )</p>
                    <br />
                    <p>Check console for the sequences</p>
                </Block>

            </Documentation>

        </Suspense>
    )
}
