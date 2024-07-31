import { useState } from 'react'
import { useTimeout } from '../../../..';
import { Button } from '@/components/ui/button';

const defaultTimer = 15000 / 1000;

export default function Demo({ defaultTimeout }: any) {

    const [count, setCount] = useState(10);
    const { clear, reset } = useTimeout(() => setCount(0), defaultTimeout);

    return (
        <>
            <ul className='list-decimal pl-5 mb-5'>
                <li>
                    In this example, when page reloads, it will wait for {defaultTimer} seconds and then value will be changed to 0
                </li>
                <li>
                    If you click on Clear Timeout button with in {defaultTimer} seconds, then it will not change the value
                </li>
                <li>
                    If you click on Reset Timeout button, it will restart the timer of {defaultTimer} seconds
                </li>
            </ul>

            <div className="mb-2">{count}</div>

            <div className='flex gap-3'>
                <Button size="sm" onClick={() => setCount(c => c + 1)}>Increment</Button>
                <Button size="sm" onClick={clear}>Clear Timeout</Button>
                <Button size="sm" onClick={reset}>Reset Timeout</Button>
            </div>
        </>
    )
}
