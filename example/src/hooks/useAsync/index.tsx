import { lazy, Suspense } from 'react';
import { useAsync } from '../../../..';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useAsync';
const info = 'Hook to handle async method';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params
            CALLBACK_FUNCTION - function - block of code to execute
            DEPENDENCIES - Array<any> - Collection of dependencies, Callback function will execute when the value of any dependencies change

        @returns
            loading - boolean - Loading state ( true or false )
            value - any - Data we get when async process completed with success response'
            error - any - Data we get when async process rejected
    */
    const { loading, value, error } = ${hook}(CALLBACK_FUNCTION, [DEPENDENCIES]);
}`

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

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>
                    <div>Loading: {loading.toString()}</div>

                    <div className="flex flex-row flex-wrap gap-3 mt-2">
                        <div className='text-green-600 font-semibold'>{value}</div>
                        <div className='text-red-600 font-semibold'>{error}</div>
                    </div>
                </Block>
            </Documentation>

        </Suspense>
    )
}

