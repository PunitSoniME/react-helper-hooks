import { lazy, Suspense } from 'react';
import { useGeolocation } from '../../../..';
import { packageName } from '@/lib/utils';

const Block = lazy(() => import('@/common/Details/Block'));
const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useGeolocation';
const info = 'Get the geolocation ';

const usage: string = `import { ${hook} } from '${packageName}';

export default function Component() {
    /*
        @params - Object ( Type of PositionOptions )

        @returns
            loading - Boolean -Loading state ( true or false )
            data - { latitude, longitude } - latitude and longitude of user
            error - any - Data we get when async process rejected
    */
    const { loading, error, data: { latitude, longitude } } = ${hook}();
}`

export default function FetchComponent() {

    const { loading, error, data: { latitude, longitude } } = useGeolocation();

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Block title='Example'>

                    <div className="flex flex-col flex-wrap gap-3 mt-2">

                        <div>Loading: {loading?.toString()}</div>

                        <div className='text-green-600 font-semibold'>
                            latitude: {latitude}
                            <br />
                            longitude: {longitude}
                        </div>

                        <div className='text-red-600 font-semibold'>
                            {error?.message}
                        </div>

                    </div>
                </Block>

            </Documentation>

        </Suspense>
    )
}
