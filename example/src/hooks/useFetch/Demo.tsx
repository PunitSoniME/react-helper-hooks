import { useState } from 'react';
import { useFetch } from '../../../..';
import { Button } from '@/components/ui/button';

export default function Demo() {

    const [id, setId] = useState(1);
    const { loading, error, value } = useFetch(`https://reqres.in/api/users/${id}`, {}, [id]);

    return (
        <>
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
        </>
    )
}
