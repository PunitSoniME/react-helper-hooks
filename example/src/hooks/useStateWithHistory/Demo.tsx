import { useState } from 'react';
import { useStateWithHistory } from '../../../..';
import { Button } from '@/components/ui/button';
import Muted from '@/common/Muted';

export default function Demo() {

    const [value, set, { history, pointer, back, forward, go }] = useStateWithHistory(1);
    const [name, setName] = useState("Punit");

    return (
        <div className='flex justify-between flex-col items-start gap-3'>

            <div>Total Values - {value}</div>
            <div>History - {history.join(", ")}</div>
            <div>Pointer - {pointer}</div>

            <div className='flex gap-3 border-b pb-4'>
                <Button size="sm" onClick={() => set((currentCount: any) => currentCount * 2)}>Double</Button>
                <Button size="sm" onClick={() => set((currentCount: any) => currentCount + 1)}>Increment</Button>
                <Button size="sm" onClick={() => go(2)}>Go To Index 2</Button>
                <Button size="sm" onClick={back}>Back</Button>
                <Button size="sm" onClick={forward}>Forward</Button>
            </div>

            <p>{name}</p>
            <Button size="sm" variant="outline" onClick={() => setName("Soni")}>Change Name</Button>

            <Muted>
                This change name variable is used only to show you that whole component is not rerendering when we update other variable
            </Muted>

        </div>
    )
}
