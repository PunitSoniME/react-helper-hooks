import { useState, lazy, Suspense } from 'react';
import { useGeolocation } from '../../../../.';
import { packageName } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Title = lazy(() => import('@/common/Details/Title'));
const Block = lazy(() => import('@/common/Details/Block'));
const Api = lazy(() => import('@/common/Details/Api'));
const Lead = lazy(() => import('@/common/Lead'));

const hook = 'useGeolocation';

const api = [
    { execute: 'loading', type: 'Boolean', description: 'Loading state ( true or false )' },
    { execute: 'data', type: '{ latitude, longitude }', description: 'latitude and longitude of user' },
    { execute: 'error', type: 'any', description: 'Data we get when async process rejected' },
];

export default function FetchComponent() {

    const { loading, error, data: { latitude, longitude } } = useGeolocation({});

    return (
        <Suspense fallback={<></>}>

            <Title>{hook}</Title>

            <Lead className='text-md'>
                The <code>{hook}</code> will help you to get latitude and longitude of user
            </Lead>

            <Block title='Usage'>
                <div className='flex flex-col gap-5'>
                    <code>
                        {`import { ${hook} } from "${packageName}";`}
                    </code>
                    <code>
                        {`const { loading, error, data: { latitude, longitude } } = ${hook}({});`}
                    </code>
                </div>
            </Block>

            <Api api={api} />

            <Block title='Example'>

                <div className="flex flex-col flex-wrap gap-3 mt-2">

                    <div>Loading: {loading?.toString()}</div>

                    <div className='text-green-600 font-semibold'>
                        latitude: {latitude}
                        <br />
                        longitude: {longitude}
                    </div>

                    <div className='text-red-600 font-semibold'>
                        {error?.toString()}
                    </div>

                </div>
            </Block>

        </Suspense>
    )
}
