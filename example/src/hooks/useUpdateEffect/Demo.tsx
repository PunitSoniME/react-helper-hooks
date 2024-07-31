
import { useState } from 'react';
import { useUpdateEffect } from '../../../..';
import { Button } from '@/components/ui/button';

export default function Demo() {

    const [count, setCount] = useState(10);

    useUpdateEffect(() => alert(count), [count]);

    return (
        <>
            <div className='mb-3'>{count}</div>
            <Button size="sm" onClick={() => setCount(c => c + 1)}>Increment</Button>
        </>
    )
}
