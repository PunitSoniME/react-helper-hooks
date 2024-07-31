import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useFetch';
const info = 'Helps you to fetch any api call';

const usage: string = `import { ${hook} } from '${packageName}';

const { loading, value, error } = ${hook}(URL, OBJECT_TO_SEND, [DEPENDENCIES]);

/*
    @params
        URL - string - An event name on which you want to execute the callback function
        Params - Object - An object to send with the request
        DEPENDENCIES - Array - Collection of dependencies, Callback function will execute when the value of any dependencies change

    @returns
        loading - boolean - Loading state ( true or false )
        value - any - Data we get when async process completed with success response
        error - any - Data we get when async process rejected
*/`

export default function FetchComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
                version="1.2.0"
            >
                
                <Demo />
                
            </Documentation>

        </Suspense>
    )
}



