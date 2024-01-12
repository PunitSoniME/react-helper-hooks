import { useState, lazy, Suspense } from 'react';
import { useFetch } from '../../../..';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useFetch';
const info = 'Helps you to fetch any api call';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            URL - string - An event name on which you want to execute the callback function
            Params - Object - An object to send with the request
            DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change

        @returns
            loading - boolean - Loading state ( true or false )
            value - any - Data we get when async process completed with success response
            error - any - Data we get when async process rejected
    */
    const { loading, value, error } = ${hook}(URL, OBJECT_TO_SEND, [DEPENDENCIES]);
}`

export default function FetchComponent() {

    const [id, setId] = useState(1);
    const { loading, error, value } = useFetch(`https://reqres.in/api/users/${id}`, {}, [id]);

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>
                    <div>{id}</div>
                    <Button
                        size="sm"
                        onClick={() => setId(currentId => ++currentId)}
                    >
                        Fetch Next Record
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
                
            </Documentation>

        </Suspense>
    )
}



