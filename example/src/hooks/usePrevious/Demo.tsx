import { useState } from 'react';
import { usePrevious } from '../../../..';
import { Button } from '@/components/ui/button';
import Muted from '@/common/Muted';

export default function Demo() {
    
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Punit");
    const previousValue = usePrevious(count);

    return (
        <div className="flex flex-col gap-3 mt-2">

            <div className='flex flex-col gap-2 items-start'>
                <div>
                    <div>Current Value: {count}</div>
                    <div>Previous Value: {previousValue}</div>
                </div>

                <Button size="sm" onClick={() => setCount((value) => value + 1)}>Increment</Button>
            </div>

            <hr />

            <div className='flex flex-col gap-2 items-start'>
                <div>{name}</div>

                <Button size="sm" onClick={() => setName("Soni")}>Change Name</Button>
            </div>

            <Muted>
                This change name variable is used only to show you that whole component is not rerendering when we update other variable
            </Muted>

        </div>
    )
}
