import { useGeolocation } from '../../../..';

export default function Demo() {

    const { loading, error, data: { latitude, longitude } } = useGeolocation();

    return (
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
    )
}
