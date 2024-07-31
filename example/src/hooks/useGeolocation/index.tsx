import { lazy, Suspense } from 'react';
import { packageName } from '@/lib/utils';
import Demo from './Demo';

const Documentation = lazy(() => import('@/common/Documentation'));

const hook = 'useGeolocation';
const info = 'Get the geolocation ';

const usage: string = `import { ${hook} } from '${packageName}';

const { loading, error, data: { latitude, longitude } } = ${hook}();

/*
    @params - Object ( Type of PositionOptions )

    @returns
        loading - Boolean -Loading state ( true or false )
        data - { latitude, longitude } - latitude and longitude of user
        error - any - Data we get when async process rejected
*/`

export default function GeoLocationComponent() {

    return (
        <Suspense fallback={<></>}>

            <Documentation
                hook={hook}
                info={info}
                usage={usage}
            >
                <Demo />

            </Documentation>

        </Suspense>
    )
}
